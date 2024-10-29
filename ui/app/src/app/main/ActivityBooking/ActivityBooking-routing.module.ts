import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityBookingHomeComponent } from './home/ActivityBooking-home.component';
import { ActivityBookingNewComponent } from './new/ActivityBooking-new.component';
import { ActivityBookingDetailComponent } from './detail/ActivityBooking-detail.component';

const routes: Routes = [
  {path: '', component: ActivityBookingHomeComponent},
  { path: 'new', component: ActivityBookingNewComponent },
  { path: ':id', component: ActivityBookingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ActivityBooking-detail-permissions'
      }
    }
  }
];

export const ACTIVITYBOOKING_MODULE_DECLARATIONS = [
    ActivityBookingHomeComponent,
    ActivityBookingNewComponent,
    ActivityBookingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityBookingRoutingModule { }