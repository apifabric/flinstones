import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeeHomeComponent } from './home/Attendee-home.component';
import { AttendeeNewComponent } from './new/Attendee-new.component';
import { AttendeeDetailComponent } from './detail/Attendee-detail.component';

const routes: Routes = [
  {path: '', component: AttendeeHomeComponent},
  { path: 'new', component: AttendeeNewComponent },
  { path: ':id', component: AttendeeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Attendee-detail-permissions'
      }
    }
  }
];

export const ATTENDEE_MODULE_DECLARATIONS = [
    AttendeeHomeComponent,
    AttendeeNewComponent,
    AttendeeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendeeRoutingModule { }