import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

const ROUTES: Routes = [
  { path: '',      component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    Angulartics2Module,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    Angulartics2Module.forRoot([ Angulartics2GoogleTagManager ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
