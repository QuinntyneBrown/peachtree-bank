import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonComponent } from './button.component';
import { SubHeaderComponent } from './sub-header.component';
import { SortByComponent } from './sort-by.component';
import { SearchComponent } from './search.component';




@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    SubHeaderComponent,
    SortByComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    SubHeaderComponent,
    SearchComponent,
    SortByComponent
  ]
})
export class SharedModule { }
