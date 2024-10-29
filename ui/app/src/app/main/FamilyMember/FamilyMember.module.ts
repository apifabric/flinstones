import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FAMILYMEMBER_MODULE_DECLARATIONS, FamilyMemberRoutingModule} from  './FamilyMember-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FamilyMemberRoutingModule
  ],
  declarations: FAMILYMEMBER_MODULE_DECLARATIONS,
  exports: FAMILYMEMBER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FamilyMemberModule { }