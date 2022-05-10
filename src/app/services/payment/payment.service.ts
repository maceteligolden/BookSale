import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  initialize(email: string, amount: string): Observable<any> {

    const payload = {
      email: email,
      amount: amount
    }

    return this.http.post("api.paystack.co/transaction/initialize", payload)
  }
}
