import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {

  @Input()
  public transactions: Transaction[];

  constructor() { }

  ngOnInit(): void {
  }

}
