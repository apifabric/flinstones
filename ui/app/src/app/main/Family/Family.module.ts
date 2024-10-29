import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FAMILY_MODULE_DECLARATIONS, FamilyRoutingModule} from  './Family-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FamilyRoutingModule
  ],
  declarations: FAMILY_MODULE_DECLARATIONS,
  exports: FAMILY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FamilyModule { }