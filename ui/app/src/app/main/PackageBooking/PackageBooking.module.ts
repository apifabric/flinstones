import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PACKAGEBOOKING_MODULE_DECLARATIONS, PackageBookingRoutingModule} from  './PackageBooking-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PackageBookingRoutingModule
  ],
  declarations: PACKAGEBOOKING_MODULE_DECLARATIONS,
  exports: PACKAGEBOOKING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PackageBookingModule { }