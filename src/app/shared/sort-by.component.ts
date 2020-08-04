import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent {

  public sortAscending = true;

  public sortBy: SortBy = null;

  @Output()
  public sort: EventEmitter<any> = new EventEmitter();

  public onClick(field: SortBy): void {
    if (this.sortBy && this.sortBy === field) {
      this.sortAscending = !this.sortAscending;
    }

    this.sortBy = field;

    this.sort.emit({
      field, sortAscending: this.sortAscending
    });
  }
}


export type SortBy = 'Date' | 'Beneficiary' | 'Amount';
