import { Component, NgModule, OnInit } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@NgModule({
  imports: [
    Angulartics2Module,
  ],
  declarations: [
    HomeComponent,
  ]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
