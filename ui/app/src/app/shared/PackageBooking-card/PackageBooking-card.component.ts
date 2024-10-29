import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PackageBooking-card.component.html',
  styleUrls: ['./PackageBooking-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PackageBooking-card]': 'true'
  }
})

export class PackageBookingCardComponent {


}