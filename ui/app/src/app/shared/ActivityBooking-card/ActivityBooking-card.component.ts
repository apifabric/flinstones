import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ActivityBooking-card.component.html',
  styleUrls: ['./ActivityBooking-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ActivityBooking-card]': 'true'
  }
})

export class ActivityBookingCardComponent {


}