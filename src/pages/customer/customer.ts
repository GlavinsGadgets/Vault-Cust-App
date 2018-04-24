import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { CustBalProvider } from '../../providers/cust-bal/cust-bal';

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  @ViewChild(Nav) nav: Nav;

  qrData = null;
  scannedCode = null;

  customer: string[];
  cusloyaltypoints: string;
  setcusloyaltypoints: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public http: HttpClient, private cp: CustBalProvider) {  }
 
  ionViewDidLoad() {
    this.cp.getCustomerData().subscribe(data => {
      this.customer = data.customer
    }
    );
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;

    }, (err) => {
        console.log('Error: ', err);
    });
  }



}