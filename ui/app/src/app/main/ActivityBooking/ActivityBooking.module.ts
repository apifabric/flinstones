import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ACTIVITYBOOKING_MODULE_DECLARATIONS, ActivityBookingRoutingModule} from  './ActivityBooking-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ActivityBookingRoutingModule
  ],
  declarations: ACTIVITYBOOKING_MODULE_DECLARATIONS,
  exports: ACTIVITYBOOKING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActivityBookingModule { }