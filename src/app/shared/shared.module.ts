import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonComponent } from './button.component';
import { SubHeaderComponent } from './sub-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    SubHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    SubHeaderComponent]
})
export class SharedModule { }
