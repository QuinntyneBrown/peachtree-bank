import { Component, OnInit, Inject } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { LocalStorageService } from '../core/local-storage.service';
import { accountBalanceKey } from '../core/constants';

@Component({
  selector: 'app-transfer-confirmation-overlay',
  templateUrl: './transfer-confirmation-overlay.component.html',
  styleUrls: ['./transfer-confirmation-overlay.component.css']
})
export class TransferConfirmationOverlayComponent {

  constructor(
    public overlayRef: OverlayRef,
    public transactionService: TransactionService,
    public localStorageService: LocalStorageService
    ) {

  }


  public get accountBalance(): any {
    return this.localStorageService.get({ name: accountBalanceKey });
  }

  public transaction: Transaction;

  public close() {
    this.overlayRef.dispose();
  }

  public confirm() {
    const  v = [this.transaction].concat(this.transactionService.transactions$.value);
    this.transactionService.transactions$.next(v);
    this.overlayRef.dispose();
  }

}
