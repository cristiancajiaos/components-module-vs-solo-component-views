import { FourModule } from './four/four.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OneComponent,
    TwoComponent,
    ThreeComponent
  ]
})
export class NumbersModule { }
