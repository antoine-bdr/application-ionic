import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BookListPage } from '../pages/book-list/book-list';
import { LendBookPage} from '../pages/book-list/lend-book/lend-book';
import { CDListPage } from '../pages/cd-list/cd-list';
import { LendCDPage} from '../pages/cd-list/lend-cd/lend-cd';
import { TabsPage } from '../pages/tabs/tabs';
import { BookService } from '../services/book-service';
import { CDService } from '../services/cd-service';
import { ReglagePage } from '../pages/réglage/réglage';


@NgModule({
  declarations: [
    MyApp,
    BookListPage,
    LendBookPage,
    CDListPage,
    LendCDPage,
    TabsPage,
    ReglagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookListPage,
    LendBookPage,
    CDListPage,
    LendCDPage,
    TabsPage,
    ReglagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BookService,
    CDService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
