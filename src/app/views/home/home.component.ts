import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private payment: PaymentService) { }

  ngOnInit(): void {
  }

  makePayment(): void {
    this.payment.initialize("benjaminambrose99@gmail.com", "23000").subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
