import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageBookingHomeComponent } from './home/PackageBooking-home.component';
import { PackageBookingNewComponent } from './new/PackageBooking-new.component';
import { PackageBookingDetailComponent } from './detail/PackageBooking-detail.component';

const routes: Routes = [
  {path: '', component: PackageBookingHomeComponent},
  { path: 'new', component: PackageBookingNewComponent },
  { path: ':id', component: PackageBookingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PackageBooking-detail-permissions'
      }
    }
  }
];

export const PACKAGEBOOKING_MODULE_DECLARATIONS = [
    PackageBookingHomeComponent,
    PackageBookingNewComponent,
    PackageBookingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageBookingRoutingModule { }