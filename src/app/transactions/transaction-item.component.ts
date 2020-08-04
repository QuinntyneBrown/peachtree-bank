import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {

  @Input()
  public transaction: Transaction;

  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
    let color: string;

    switch (this.transaction.transactionType) {

      case 'Card Payment': {
        color = '#12a580';
        break;
      }

      case 'Online Transfer': {
        color = '#c12020';
        break;
      }

      case 'Transaction': {
        color = '#1180aa';
        break;
      }

    }

    this.elementRef.nativeElement.style.setProperty('--border-color', color);
  }
}
