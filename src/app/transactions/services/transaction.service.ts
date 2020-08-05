import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data } from './data';
import { Transaction } from '../types/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject(data);
}
