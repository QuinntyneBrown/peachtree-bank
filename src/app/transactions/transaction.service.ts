import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from './data';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public transactions$: Observable<Transaction[]> = of(data);
}
