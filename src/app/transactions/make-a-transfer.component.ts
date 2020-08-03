import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
