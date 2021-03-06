/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createElement } from '../../util/Util';

import { getImage } from './authCommon';
import { LoginView } from './LoginView';
import { RegisterView } from './RegisterView';

import './authorize.scss';
import { IAuthSwitcher } from './IAuth';
import { IViewManager } from '../../manager/IViewManager';

export class Auth {
  mode: string;

  constructor(manager: IViewManager) {
    this.mode = 'login';
    const root = manager.main.mainBox;
    root.innerHTML = '';
    const auth = createElement('section', ['main-box__section', 'main-box__section_type_auth', 'section-auth']);
    const inputBox = createElement('form', ['section-auth__input-box'], [['autocomplete', 'off']]);

    new LoginView(inputBox, manager);

    auth.append(inputBox, getImage());
    root.append(auth);
    getModeSwitcher(this.mode, inputBox, manager);
  }
}

function getModeSwitcher(mode: string, rootEl: HTMLElement, manager: IViewManager) {
  const switchTextObj: IAuthSwitcher = { login: 'Ещё не с нами? Тогда ', register: 'Уже с нами? ' };
  const switchLinkObj: IAuthSwitcher = { login: 'зарегистрируйтесь', register: 'Войти' };
  const switchModeBox = createElement('div', ['section-auth__switch-mode-box']);

  const switchModeText = createElement('span', ['switch-mode-box__text'], [], `${switchTextObj[mode]}`);

  const switchModeLink = createElement(
    'span',
    ['switch-mode-box__text', 'switch-mode-box__link'],
    [],
    `${switchLinkObj[mode]}`,
  );

  switchModeBox.append(switchModeText, switchModeLink);
  switchModeLink.addEventListener('click', () => {
    mode === 'register' ? new RegisterView(rootEl, switchModeBox) : new LoginView(rootEl, manager, switchModeBox);
    adaptSwitchContent(mode, switchModeText, switchModeLink, switchTextObj, switchLinkObj);
    mode = mode === 'register' ? 'login' : 'register';
    rootEl.append(switchModeBox);
  });
  mode = mode === 'register' ? 'login' : 'register';
  rootEl.append(switchModeBox);
}

function adaptSwitchContent(
  mode: string,
  textEl: HTMLElement,
  linkEl: HTMLElement,
  textArr: IAuthSwitcher,
  linkArr: IAuthSwitcher,
) {
  textEl.innerText = textArr[mode];
  linkEl.innerText = linkArr[mode];
}
