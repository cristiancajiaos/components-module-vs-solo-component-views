import { FourModule } from './../shared/numbers/four/four.module';
import { NumbersModule } from './../shared/numbers/numbers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NumbersModule,
    FourModule
  ]
})
export class HomeModule { }
