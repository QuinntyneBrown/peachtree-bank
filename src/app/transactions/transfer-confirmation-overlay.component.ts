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
export class TransferConfirmationOverlayComponent implements OnInit {

  constructor(
    public overlayRef: OverlayRef,
    public transactionService: TransactionService,
    public localStorageService: LocalStorageService
    ) {

  }

  ngOnInit(): void {
    let balance = this.localStorageService.get({ name: accountBalanceKey });
    balance -= 25;
    this.localStorageService.put({ name: accountBalanceKey, value: balance });
  }

  public get accountBalance(): any {
    return this.localStorageService.get({ name: accountBalanceKey });
  }

  public transaction: Transaction;

  public close() {
    this.overlayRef.dispose();
  }

}
