import { SixModule } from './../shared/numbers/six/six.module';
import { NumbersModule } from './../shared/numbers/numbers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NumbersModule,
    SixModule
  ]
})
export class ContactModule { }
