import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PackageBooking-new',
  templateUrl: './PackageBooking-new.component.html',
  styleUrls: ['./PackageBooking-new.component.scss']
})
export class PackageBookingNewComponent {
  @ViewChild("PackageBookingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}