import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


export const firebaseConfig = {
  apiKey: "AIzaSyBv7BcCLSsaerzJ1er-HdtoiEz2NRzIdLQ",
  authDomain: "chatapp-4c4ba.firebaseapp.com",
  databaseURL: "https://chatapp-4c4ba.firebaseio.com",
  projectId: "chatapp-4c4ba",
  storageBucket: "chatapp-4c4ba.appspot.com",
  messagingSenderId: "801923220093"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
