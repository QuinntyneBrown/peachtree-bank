import { Component } from '@angular/core';
import { LocalStorageService } from './core/local-storage.service';
import { accountBalanceKey } from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public localStorageService: LocalStorageService) {
    localStorageService.put({ name: accountBalanceKey, value: 500 });
  }
}
