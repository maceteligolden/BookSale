import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaystackService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) :Observable<HttpEvent<any>> {

    const paymentHeader = req.clone({
      headers: req.headers.set("Authorization", "Bearer pk_test_5c68d48134fd1be9f9441cf1c1524ac2e794180e")
    })

    return next.handle(paymentHeader)
  }
}
