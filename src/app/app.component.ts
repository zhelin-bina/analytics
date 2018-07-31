import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router,
              angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {
  }
}
