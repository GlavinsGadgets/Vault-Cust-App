import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustBalProvider {

  constructor(public http: HttpClient) {  }

  getCustomerData(): Observable<any> {
    return this.http.get('http://www.eglavin.com/Vault-Cust/PHP/retrieve-data.php');
  }

}
