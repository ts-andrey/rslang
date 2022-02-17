import { Team } from './../team/TeamView';
import { Review } from './../review/ReviewView';
import { Info } from './../info/InfoView';
import { Feature } from './../features/FeaturesView';
import { createElement, createSVG } from '../../util/Util';
import { About } from '../about/AboutView';
import { linkSeeker } from './navigationController';

import './navigation.scss';
import { getHiddenSvgBlock } from './navigationBuilder';

export class HomeNavigation {
  nav: HTMLElement;
  constructor() {
    this.nav = createElement('nav', ['main__home-navigation', 'home-navigation']);
  }

  render(main: HTMLElement, mainBox: HTMLElement) {
    if (!this.nav) {
      this.nav = createElement('nav', ['main__home-navigation', 'home-navigation']);
    }

    const navBox = createElement('ul', ['home-navigation__list']);

    main.append(getHiddenSvgBlock());

    const svgSHome = createSVG('svg', ['home-navigation__icon', 'home-navigation__icon_home']);
    const svgHomeUse = createSVG('use', [], [['href', '#home-icon']]);

    const svgReview = createSVG('svg', ['home-navigation__icon', 'home-navigation__icon_review']);
    const svgReviewUse = createSVG('use', [], [['href', '#review-icon']]);

    const svgFeatures = createSVG('svg', ['home-navigation__icon', 'home-navigation__icon_features']);
    const svgFeaturesUse = createSVG('use', [], [['href', '#features-icon']]);

    const svgTeam = createSVG('svg', ['home-navigation__icon', 'home-navigation__icon_team']);
    const svgTeamUse = createSVG('use', [], [['href', '#team-icon']]);

    const svgInfo = createSVG('svg', ['home-navigation__icon', 'home-navigation__icon_info']);
    const svgInfoUse = createSVG('use', [], [['href', '#info-icon']]);

    svgSHome.append(svgHomeUse);
    svgReview.append(svgReviewUse);
    svgFeatures.append(svgFeaturesUse);
    svgTeam.append(svgTeamUse);
    svgInfo.append(svgInfoUse);

    const mainLink = createElement(
      'li',
      ['home-navigation__link', 'home-navigation__link_state_active'],
      [['data-type', 'about']],
    );
    const reviewLink = createElement('li', ['home-navigation__link'], [['data-type', 'review']]);
    const featuresLink = createElement('li', ['home-navigation__link'], [['data-type', 'features']]);
    const teamLink = createElement('li', ['home-navigation__link'], [['data-type', 'team']]);
    const infoLink = createElement('li', ['home-navigation__link'], [['data-type', 'info']]);

    linkSeeker([mainLink, reviewLink, featuresLink, teamLink, infoLink]);
    mainLink.append(svgSHome);
    reviewLink.append(svgReview);
    featuresLink.append(svgFeatures);
    teamLink.append(svgTeam);
    infoLink.append(svgInfo);

    mainLink.addEventListener('click', () => new About(mainBox));
    featuresLink.addEventListener('click', () => new Feature(mainBox));
    infoLink.addEventListener('click', () => new Info(mainBox));
    reviewLink.addEventListener('click', () => new Review(mainBox));
    teamLink.addEventListener('click', () => new Team(mainBox));

    navBox.append(mainLink, featuresLink, infoLink, reviewLink, teamLink);
    this.nav.append(navBox);

    main.append(this.nav);
  }
  remove() {
    document.body.removeChild(this.nav);
  }
}