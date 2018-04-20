import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { OAuthService } from 'angular-oauth2-oidc';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  @ViewChild(Nav) nav: Nav;
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private oauthService: OAuthService) { 
    if (oauthService.hasValidIdToken()) {
      this.nav.push(CustomerPage);
    } else {
      this.nav.push(LoginPage);
    }
    
   }
 
  
  createCode() {
    this.createdCode = this.qrData;
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;

    }, (err) => {
        console.log('Error: ', err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

}
