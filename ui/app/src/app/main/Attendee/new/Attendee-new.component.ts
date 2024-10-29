import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Attendee-new',
  templateUrl: './Attendee-new.component.html',
  styleUrls: ['./Attendee-new.component.scss']
})
export class AttendeeNewComponent {
  @ViewChild("AttendeeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}