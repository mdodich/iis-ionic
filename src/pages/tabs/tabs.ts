import { Component } from '@angular/core';

import { PassesPage } from '../passes/passes';
import { AstronautsPage } from '../astronauts/astronauts';
import { MapPage } from '../map/map';
import { ConfigurationPage } from '../configuration/configuration';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = PassesPage;
  tab3Root = AstronautsPage;
  tab4Root = ConfigurationPage;

  constructor() {

  }
}
