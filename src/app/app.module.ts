import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* Pages */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CustomerPage } from '../pages/customer/customer';
import { EmployeePage } from '../pages/employee/employee';
import { ContactPage } from '../pages/contact/contact';
import { HistoryPage } from '../pages/history/history';
import { MediaPage } from '../pages/media/media';

/* Providers */
import { CustBalProvider } from '../providers/cust-bal/cust-bal';

/* Moudles */

/* Ionic/Cordova/Angular Intergration */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomerPage,
    EmployeePage,
    ContactPage,
    HistoryPage,
    MediaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NgxQRCodeModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomerPage,
    EmployeePage,
    ContactPage,
    HistoryPage,
    MediaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    BarcodeScanner,
    InAppBrowser,
    CustBalProvider,
  ]
})
export class AppModule {}
