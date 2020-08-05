import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SubHeaderComponent } from './sub-header.component';
import { SortByComponent } from './sort-by.component';
import { SearchComponent } from './search.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    SortByComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule
  ],
  exports: [
    HeaderComponent,
    SubHeaderComponent,
    SearchComponent,
    SortByComponent,
    PortalModule,
    OverlayModule  
  ]
})
export class SharedModule { }
