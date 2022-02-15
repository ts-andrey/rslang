import { GLOBAL_VALUES } from './constantsAndValues/globalValues';
import { startRound } from './startRound';
import { speakerSVG, nextSVG } from './svg';
import { createHtmlElement } from './createHtmlElement';
import API from '../api/API';

function clearPage(curHTMLElement: HTMLElement) {
  while (curHTMLElement.firstChild) {
    curHTMLElement.removeChild(curHTMLElement.firstChild);
  }
}

const wordsApi = new API();

function startAudiocall(level: number, numperPage: number) {
  GLOBAL_VALUES.currentLevel = level;
  GLOBAL_VALUES.currentPage = numperPage;
  GLOBAL_VALUES.currentRound = 0;
  GLOBAL_VALUES.currentQuestion = 0;
  const header: HTMLElement = document.querySelector('.header');
  header.style.zIndex = '2';
  header.style.userSelect = 'none';
  const footer: HTMLElement = document.querySelector('.footer');
  footer.style.display = 'none';
  const mainHTML: HTMLElement = document.querySelector('.main');
  clearPage(mainHTML);
  createHtmlElement('div', mainHTML, 'audiocall');

  document.body.insertAdjacentHTML('beforeend', speakerSVG);
  document.body.insertAdjacentHTML('beforeend', nextSVG);
  startRound();
}

export { startAudiocall, clearPage, wordsApi };
