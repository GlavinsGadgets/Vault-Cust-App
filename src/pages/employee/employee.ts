import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  qrData = null;
  empcreatedCode = null;

  constructor() { }

  createCode() {
    this.empcreatedCode = this.qrData;
  }

}
