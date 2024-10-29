import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Family-card.component.html',
  styleUrls: ['./Family-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Family-card]': 'true'
  }
})

export class FamilyCardComponent {


}