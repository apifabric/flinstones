import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ATTENDEE_MODULE_DECLARATIONS, AttendeeRoutingModule} from  './Attendee-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AttendeeRoutingModule
  ],
  declarations: ATTENDEE_MODULE_DECLARATIONS,
  exports: ATTENDEE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AttendeeModule { }