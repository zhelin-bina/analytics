import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

const ROUTES: Routes = [
  { path: '',      component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    Angulartics2Module,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    Angulartics2Module.forRoot([ Angulartics2GoogleTagManager ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
