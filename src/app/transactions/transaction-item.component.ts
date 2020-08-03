import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {

  @Input()
  public transaction: Transaction;
  
  constructor() { }

  ngOnInit(): void {
  }

}
