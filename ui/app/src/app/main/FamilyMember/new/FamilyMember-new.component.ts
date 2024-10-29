import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FamilyMember-new',
  templateUrl: './FamilyMember-new.component.html',
  styleUrls: ['./FamilyMember-new.component.scss']
})
export class FamilyMemberNewComponent {
  @ViewChild("FamilyMemberForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}