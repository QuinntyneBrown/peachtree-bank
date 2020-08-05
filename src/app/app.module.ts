import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {TransactionsModule} from './transactions/transactions.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    TransactionsModule,

    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
