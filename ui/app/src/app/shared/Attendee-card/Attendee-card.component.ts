import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Attendee-card.component.html',
  styleUrls: ['./Attendee-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Attendee-card]': 'true'
  }
})

export class AttendeeCardComponent {


}