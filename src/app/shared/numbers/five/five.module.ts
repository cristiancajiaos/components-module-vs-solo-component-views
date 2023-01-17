import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveComponent } from './five.component';



@NgModule({
  declarations: [FiveComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FiveComponent
  ]
})
export class FiveModule { }
