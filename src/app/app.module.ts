import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CustomerPage } from '../pages/customer/customer';
import { EmployeePage } from '../pages/employee/employee';
import { ContactPage } from '../pages/contact/contact';
import { HistoryPage } from '../pages/history/history';
import { MediaPage } from '../pages/media/media';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginPageModule } from '../pages/login/login.module';

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
    LoginPageModule,
    IonicModule.forRoot(MyApp),
    OAuthModule.forRoot(),
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    BarcodeScanner,
    InAppBrowser,
  ]
})
export class AppModule {}
