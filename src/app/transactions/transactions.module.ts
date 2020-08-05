import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { MakeATransferComponent } from './make-a-transfer/make-a-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { TransactionService } from './transaction.service';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiOrderByPipe } from './multi-order-by.pipe';
import { SearchPipe } from './search.pipe';
import { TransferConfirmationOverlayComponent } from './transfer-confirmation-overlay/transfer-confirmation-overlay.component';
import { TransferConfirmation } from './transfer-confirmation-overlay/transfer-confirmation';

@NgModule({
  declarations: [
    TransactionsComponent,
    MakeATransferComponent,
    RecentTransactionsComponent,
    TransactionItemComponent,
    SearchPipe,
    MultiOrderByPipe,
    TransferConfirmationOverlayComponent
  ],
  imports: [
    CoreModule,
    SharedModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TransactionService,
    TransferConfirmation,
    CurrencyPipe
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
