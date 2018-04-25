import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Pages */
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { MediaPage } from '../pages/media/media';
import { ContactPage } from '../pages/contact/contact';
import { CustomerPage } from '../pages/customer/customer';

/* Employee Create Barcode Page */
import { EmployeePage } from '../pages/employee/employee';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'History of The Vault', component: HistoryPage },
      { title: 'Media', component: MediaPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Loyalty Scheme', component: CustomerPage },
      { title: 'Emplyoee Create Barcode', component: EmployeePage },
    ];

    this.initializeApp();

  }

  openPage(page) {
    this.nav.setRoot(page.component, {}, {animate: true, duration: 200});
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
