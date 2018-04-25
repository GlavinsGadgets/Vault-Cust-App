import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  qrData = null;
  empcreatedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) { }

  createCode() {
    this.empcreatedCode = this.qrData;
  }

}
