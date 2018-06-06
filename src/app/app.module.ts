import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PassesPage } from '../pages/passes/passes';
import { AstronautsPage } from '../pages/astronauts/astronauts';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfigurationPage } from '../pages/configuration/configuration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IssTrackingDataProvider } from '../providers/iss-tracking-data/iss-tracking-data';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module'
import { LocationProvider } from '../providers/location/location';

@NgModule({
  declarations: [
    MyApp,
    PassesPage,
    AstronautsPage,
    MapPage,
    TabsPage,
    ConfigurationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpClientJsonpModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PassesPage,
    AstronautsPage,
    MapPage,
    TabsPage,
    ConfigurationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IssTrackingDataProvider,
    LocationProvider
  ]
})
export class AppModule {}
