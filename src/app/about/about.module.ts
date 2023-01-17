import { FiveModule } from './../shared/numbers/five/five.module';
import { FourModule } from './../shared/numbers/four/four.module';
import { NumbersModule } from './../shared/numbers/numbers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NumbersModule,
    FiveModule
  ]
})
export class AboutModule { }
