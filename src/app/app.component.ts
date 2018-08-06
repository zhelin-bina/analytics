import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router,
              private angulartics2: Angulartics2,
              angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {
    this.angulartics2.eventTrack.next({
      action: 'LinkClick',
      properties: { category: 'detail_link' },
    });
  }
}
