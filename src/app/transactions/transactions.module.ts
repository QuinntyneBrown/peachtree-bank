import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { MakeATransferComponent } from './make-a-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions.component';
import { TransactionItemComponent } from './transaction-item.component';
import { TransactionService } from './transaction.service';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TransactionsComponent, MakeATransferComponent, RecentTransactionsComponent, TransactionItemComponent],
  imports: [
    CoreModule,
    SharedModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TransactionService
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
