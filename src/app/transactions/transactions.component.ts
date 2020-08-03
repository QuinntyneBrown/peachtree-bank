import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions$ = this.transactionService.transactions$;

  constructor(
    public transactionService: TransactionService
  ) { }

  ngOnInit(): void {
  }

}
