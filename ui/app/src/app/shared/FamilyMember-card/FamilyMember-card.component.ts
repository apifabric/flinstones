import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FamilyMember-card.component.html',
  styleUrls: ['./FamilyMember-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FamilyMember-card]': 'true'
  }
})

export class FamilyMemberCardComponent {


}