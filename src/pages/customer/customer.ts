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
  createdCode = null;
  scannedCode = null;

  CID:string;
  CLName:string;
  CLUserName:string;
  CLPassword:string;
  CLPPoints:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public http: HttpClient, private cp: CustBalProvider) {  }
 
  ionViewDidLoad(){
    this.cp.getCustomerData().subscribe(data => {
      this.CID = data.C_ID;
      this.CLName = data.CL_Name;
      this.CLUserName = data.CL_UserName;
      this.CLPassword = data.CL_Password;
      this.CLPPoints = data.CLP_Points;
    });
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



}