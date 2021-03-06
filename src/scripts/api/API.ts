import {
  HTTPMethod,
  IAggregatedWordSchema,
  IAggregatedWordsSchema,
  IUserData,
  IUserSchema,
  IUserSettings,
  IUserStatistics,
  IUserTokens,
  IUserWord,
  IWordSchema,
  StatusCode,
  TUserInfo,
} from '../types/types';
import { SessionStorage } from '../state/StorageSettings';

export class API {
  private readonly endpoint: string;

  private userId: string;

  private accessToken: string;

  private refreshToken: string;

  private static _instance: API;

  constructor() {
    if (API._instance) {
      return API._instance;
    }
    API._instance = this;
    this.endpoint = 'https://rslang-909.herokuapp.com';
    this.getStorageUserData();
  }

  getStorageUserData() {
    const userData: IUserData = JSON.parse(sessionStorage.getItem(SessionStorage.userData));
    this.userId = userData?.userId;
    this.accessToken = userData?.token;
    this.refreshToken = userData?.refreshToken;
  }

  updateStorageTokens(tokensData: IUserTokens) {
    const userData: IUserData = JSON.parse(sessionStorage.getItem(SessionStorage.userData));
    userData.token = tokensData.token;
    userData.refreshToken = tokensData.refreshToken;
    sessionStorage.setItem(SessionStorage.userData, JSON.stringify(userData));
  }

  clearUserData() {
    this.userId = null;
    this.accessToken = null;
    this.refreshToken = null;
    sessionStorage.removeItem(SessionStorage.userData);
  }

  async getAllWords() {
    const endpointModifier = `/words/all`;
    const response = await fetch(this.endpoint + endpointModifier, {
      method: 'GET',
    });
    if (response && response.status === StatusCode.OK) {
      return (await response.json()) as IWordSchema[];
    }
  }

  async getWords(group: number, page: number) {
    const endpointModifier = `/words?group=${group}&page=${page}`;
    const response = await fetch(this.endpoint + endpointModifier, {
      method: 'GET',
    });
    if (response && response.status === StatusCode.OK) {
      return (await response.json()) as IWordSchema[];
    }
  }

  async getWord(id: string) {
    const endpointModifier = `/words/${id}`;
    const response = await fetch(this.endpoint + endpointModifier, {
      method: 'GET',
    });
    if (response && response.status === StatusCode.OK) {
      return (await response.json()) as IWordSchema;
    } else if (response && response.status === StatusCode.InternalServerError) {
      console.log('There is no word with such id');
    }
    return;
  }

  async createUser(user: IUserSchema): Promise<void> {
    const endpointModifier = `/users`;
    const response = await fetch(this.endpoint + endpointModifier, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response && response.status === StatusCode.UnprocessableEntity) {
      window.dispatchEvent(new CustomEvent('show-error', { detail: { error: 'Incorrect e-mail or password' } }));
      console.log('Incorrect e-mail or password');
    }
    return;
  }

  async getUser() {
    const endpointModifier = `/users/${this.userId}`;
    const response = await this.authorizedRequest(endpointModifier, HTTPMethod.get);
    if (response && response.status === StatusCode.OK) {
      return (await response.json()) as IUserSchema;
    } else {
      return;
    }
  }

  async updateUser(user: TUserInfo): Promise<Response> {
    const endpointModifier = `/users/${this.userId}`;
    return this.authorizedRequest(endpointModifier, HTTPMethod.put, user);
  }

  async deleteUser(): Promise<Response> {
    const endpointModifier = `/users/${this.userId}`;
    return this.authorizedRequest(endpointModifier, HTTPMethod.delete);
  }

  async getUserTokens(): Promise<number> {
    const endpointModifier = `/users/${this.userId}/tokens`;
    let response: Response;
    if (this.userId) {
      response = await fetch(this.endpoint + endpointModifier, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.refreshToken}`,
        },
      });
    } else {
      return 401;
    }
    if (response) {
      if (response.status === StatusCode.OK) {
        this.updateStorageTokens(await response.json());
        this.getStorageUserData();
      }
      return response.status;
    }
  }

  async getUserWords(): Promise<void | IUserWord[]> {
    const endpointModifier = `/users/${this.userId}/words`;
    const response = await this.authorizedRequest(endpointModifier, HTTPMethod.get);
    if (response && response.status === StatusCode.OK) {
      return (await response.json()) as IUserWord[];
    } else {
      return;
    }
  }

  async createUserWord(wordId: string, word: IUserWord): Promise<Response> {
    const endpointModifier = `/users/${this.userId}/words/${wordId}`;
    return this.authorizedRequest(endpointModifier, HTTPMethod.post, word);
  }

  async getUserWord(wordId: string): Promise<void | IUserWord> {
    const endpointModifier = `/users/${this.userId}/words/${wordId}`;
    const response = await this.authorizedRequest(endpointModifier, HTTPMethod.get);
    if (response && response.status === StatusCode.OK) {
      return (await response.json()) as IUserWord;
    } else {
      return;
    }
  }

  async updateUserWord(wordId: string, word: IUserWord): Promise<Response> {
    const endpointModifier = `/users/${this.userId}/words/${wordId}`;
    return this.authorizedRequest(endpointModifier, HTTPMethod.put, word);
  }

  async deleteUserWord(wordId: string): Promise<Response> {
    const endpointModifier = `/users/${this.userId}/words/${wordId}`;
    return this.authorizedRequest(endpointModifier, HTTPMethod.delete);
  }

  async getUserAggregatedWords(
    group = '0',
    page = '0',
    wordsPerPage = '20',
    filter = {},
  ): Promise<void | IAggregatedWordSchema[]> {
    let queryString = '';
    const queries = ['?'];
    if (group) {
      queries.push(`group=${group}`);
    }
    if (page) {
      queries.push(`page=${page}`);
    }
    if (wordsPerPage) {
      queries.push(`wordsPerPage=${wordsPerPage}`);
    }
    if (filter) {
      queries.push(`filter=${JSON.stringify(filter)}`);
    }
    if (queries.length > 1) {
      queryString = queries.join('&');
    }
    const endpointModifier = `/users/${this.userId}/aggregatedWords` + queryString;
    const response = await this.authorizedRequest(endpointModifier, HTTPMethod.get);
    if (response && response.status === 200) {
      const data: IAggregatedWordsSchema[] = await response.json();
      return data[0].paginatedResults;
    }
  }

  async getUserAggregateWord(wordId: string): Promise<void | IAggregatedWordSchema[]> {
    const endpointModifier = `/users/${this.userId}/aggregatedWords/${wordId}`;
    const response = await this.authorizedRequest(endpointModifier, HTTPMethod.get);
    return (await response.json()) as IAggregatedWordSchema[];
  }

  async getUserStatistics(): Promise<void | IUserStatistics> {
    const endpointModifier = `/users/${this.userId}/statistics`;
    const response = await this.authorizedRequest(endpointModifier, HTTPMethod.get);
    if (response && response.status === 200) {
      return (await response.json()) as IUserStatistics;
    } else {
      return;
    }
  }

  async updateUserStatistics(statistics: IUserStatistics): Promise<Response> {
    const endpointModifier = `/users/${this.userId}/statistics`;
    return this.authorizedRequest(endpointModifier, HTTPMethod.put, statistics);
  }

  async getUserSettings(): Promise<void | IUserSettings> {
    const endpointModifier = `/users/${this.userId}/settings`;
    const response = await this.authorizedRequest(endpointModifier, HTTPMethod.get);
    return (await response.json()) as IUserSettings;
  }

  async updateUserSettings(settings: IUserSettings): Promise<Response> {
    const endpointModifier = `/users/${this.userId}/settings`;
    return this.authorizedRequest(endpointModifier, HTTPMethod.put, settings);
  }

  async signIn(user: TUserInfo): Promise<void | IUserData> {
    const endpointModifier = `/signin`;
    const response = await fetch(this.endpoint + endpointModifier, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.status === StatusCode.Forbidden || response.status === StatusCode.NotFound) {
      const errorText = 'Incorrect e-mail or password';
      console.log(errorText);
      window.dispatchEvent(new CustomEvent('show-error', { detail: { error: errorText } }));
    }
    const userData: IUserData = await response.json();
    sessionStorage.setItem(SessionStorage.userData, JSON.stringify(userData));
    this.getStorageUserData();
    return userData;
  }

  async authorizedRequest(
    path: string,
    method: HTTPMethod,
    data?: IUserSettings | IUserStatistics | IUserSchema | IUserWord | TUserInfo,
  ) {
    const init = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: undefined as string,
    };
    if (data) {
      init.body = JSON.stringify(data);
    }
    let response = await fetch(this.endpoint + path, init);
    if (response.status === StatusCode.OK) {
      return response;
    } else if (response.status === StatusCode.Unauthorized) {
      const status = await this.getUserTokens();
      if (status === StatusCode.OK) {
        init.headers.Authorization = `Bearer ${this.accessToken}`;
        response = await fetch(this.endpoint + path, init);
        if (response.status === StatusCode.OK) {
          return response;
        }
      }
    }
    if (response.status === StatusCode.NotFound) {
      console.log('Not Found');
    } else if (response.status === StatusCode.UnprocessableEntity) {
      console.log('Incorrect e-mail or password\nor\nWrong Schema');
    } else if (response.status === StatusCode['Expectation Failed']) {
      console.log('Word/User already exists');
    } else {
      const errorText = 'Authorization failed.\nTry to re-login.';
      console.log(errorText);
      window.dispatchEvent(new CustomEvent('show-error', { detail: { error: errorText } }));
      window.dispatchEvent(new CustomEvent('logout'));
      this.clearUserData();
    }
  }
}

export default API;
