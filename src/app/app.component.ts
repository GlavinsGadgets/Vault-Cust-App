import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OAuthService } from 'angular-oauth2-oidc';

import { HomePage } from '../pages/home/home';
import { CustomerPage } from '../pages/customer/customer';
import { EmployeePage } from '../pages/employee/employee';
import { ContactPage } from '../pages/contact/contact';
import { HistoryPage } from '../pages/history/history';
import { MediaPage } from '../pages/media/media';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public oauthService: OAuthService) {

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'History of The Vault', component: HistoryPage },
      { title: 'Media', component: MediaPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Loyalty Scheme', component: CustomerPage },
      { title: 'Login', component: LoginPage },
      { title: 'Emplyoee Create Barcode', component: EmployeePage },
    ];


    
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
