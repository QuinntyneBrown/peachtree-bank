import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent  {

  public searchInput: string;

  public sortOptions: any;

  public sortAscending = true;

  @Input()
  public transactions: Transaction[];

  public onSort($event): void {
    this.sortOptions = $event;
    //this.sortOptions.searchInput = this.searchInput;
  }



}

