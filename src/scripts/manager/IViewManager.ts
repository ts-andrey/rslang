import { BurgerView } from '../burger/BurgerView';
import { FooterView } from '../footer/FooterView';
import { HeaderView } from '../header/HeaderView';
import { HomeView } from '../home/home/HomeVIew';
import { HomeNavigation } from '../home/navigation/Navigation';
import { MainView } from '../main/MainView';
import { StatisticsView } from '../statistics/StatisticsView';
import { ViewManager } from './ViewManager';

export interface IViewManager {
  header: HeaderView;
  main: MainView;
  footer: FooterView;
  burger: BurgerView;
  home: HomeView;
  homeNavigation: HomeNavigation;
  statistics: StatisticsView;
  manager: ViewManager;
}
