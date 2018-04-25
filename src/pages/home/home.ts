import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomerPage } from '../../pages/customer/customer';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {  }

  OpenCustomerPage() {
    this.navCtrl.setRoot(CustomerPage, {}, {animate: true, duration: 250});
  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no',
    }
    const browser = this.inAppBrowser.create(url, '_system', options);
    browser;
  }
}
