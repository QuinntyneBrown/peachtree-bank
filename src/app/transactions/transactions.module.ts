import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { MakeATransferComponent } from './make-a-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions.component';
import { TransactionItemComponent } from './transaction-item.component';
import { TransactionService } from './transaction.service';



@NgModule({
  declarations: [TransactionsComponent, MakeATransferComponent, RecentTransactionsComponent, TransactionItemComponent],
  imports: [
    CommonModule
  ],
  providers: [
    TransactionService
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
