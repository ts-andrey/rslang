import API from "../components/api/API";
import {ISprintWord, IWordSchema} from "../types/types";
import {WordsSettings} from "../components/games/sprint/SprintSettings";

class SprintModel {
  private readonly api: API;
  private readonly page: number;
  private readonly group: number;
  private currentPage: number;
  constructor(group: number, page: number) {
    this.api = new API();
    this.group = group;
    this.page = page;
    this.currentPage = page ? 0 : 1;
  }

  async fetchWords(group: number, page: number) {
    return this.api.getWords(group, page);
  }

  async getWords(group = this.group, page = this.page) {
    const words = await this.fetchWords(group, page);
    const shuffledWords = this.shuffleOrder(words);
    const x = this.shuffleTranslation(shuffledWords);
    console.log(x);
    return x
  }

  shuffleOrder(array: IWordSchema[]) {
    return array.slice().sort(() => Math.random() - 0.5);
  }

  shuffleTranslation(array: IWordSchema[]) {
    return array.map((word, index) => {
      const gameWord = {...word} as ISprintWord
      if (Math.random() > 0.5) {
        gameWord.gameTranslate = gameWord.wordTranslate;
        gameWord.answer = true;
      } else {
        let randomIndex = index;
        while (randomIndex === index) {
          randomIndex = Math.floor(Math.random() * array.length);
        }
        gameWord.gameTranslate = array[randomIndex].wordTranslate;
        gameWord.answer = false;
      }
      return gameWord;
    })
  }

  async getMoreWords() {
    return await this.getWords(this.group, this.currentPage);
  }

  hasMoreWords() {
    this.currentPage = this.currentPage === this.page + 1 ? this.currentPage += 2 : this.currentPage += 1;
    return !(this.group === WordsSettings.groups || this.currentPage >= WordsSettings.pages);
  }

}

export default SprintModel;
