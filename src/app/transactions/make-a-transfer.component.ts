import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransferConfirmation } from './transfer-confirmation';
import { Transaction } from './transaction';
import { defaultMerchantLogo } from '../core/constants';

@Component({
  selector: 'app-make-a-transfer',
  templateUrl: './make-a-transfer.component.html',
  styleUrls: ['./make-a-transfer.component.css']
})
export class MakeATransferComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    fromAccount: new FormControl(null, []),
    toAccount: new FormControl(null, []),
    amount: new FormControl(null, []),
  });

  @Output()
  public createTransfer: EventEmitter<any> = new EventEmitter();

  constructor(public transferConfirmation: TransferConfirmation) { }

  ngOnInit(): void {
  }

  public tryToSubmit() {
    const transaction = {} as Transaction;

    transaction.amount = this.form.value.amount;
    transaction.merchant = this.form.value.toAccount;
    transaction.transactionType = 'Transaction';
    transaction.transactionDate = Date.now();
    transaction.merchantLogo = defaultMerchantLogo;

    this.transferConfirmation.create({ transaction });
  }
}
