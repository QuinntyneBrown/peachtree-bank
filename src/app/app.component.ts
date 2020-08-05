import { Component } from '@angular/core';
import { LocalStorageService } from './core/local-storage.service';
import { accountBalanceKey } from './core/constants';
import { TransactionService } from './transactions/services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public localStorageService: LocalStorageService, transactionService: TransactionService) {

    let total = 0;

    for (const t of transactionService.transactions$.value) {
      total += Number.parseInt(t.amount);
    }

    localStorageService.put({ name: accountBalanceKey, value: 1000 - total });
  }
}
