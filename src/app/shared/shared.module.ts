import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaystackService } from '../interceptors/paystack/paystack.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: PaystackService, multi: true}
  ]
})
export class SharedModule { }
