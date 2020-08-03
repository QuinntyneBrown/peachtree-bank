import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { data } from './data';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject(data);
}
