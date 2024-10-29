import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyHomeComponent } from './home/Family-home.component';
import { FamilyNewComponent } from './new/Family-new.component';
import { FamilyDetailComponent } from './detail/Family-detail.component';

const routes: Routes = [
  {path: '', component: FamilyHomeComponent},
  { path: 'new', component: FamilyNewComponent },
  { path: ':id', component: FamilyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Family-detail-permissions'
      }
    }
  },{
    path: ':family_id/Booking', loadChildren: () => import('../Booking/Booking.module').then(m => m.BookingModule),
    data: {
        oPermission: {
            permissionId: 'Booking-detail-permissions'
        }
    }
},{
    path: ':family_id/FamilyMember', loadChildren: () => import('../FamilyMember/FamilyMember.module').then(m => m.FamilyMemberModule),
    data: {
        oPermission: {
            permissionId: 'FamilyMember-detail-permissions'
        }
    }
},{
    path: ':family_id/PackageBooking', loadChildren: () => import('../PackageBooking/PackageBooking.module').then(m => m.PackageBookingModule),
    data: {
        oPermission: {
            permissionId: 'PackageBooking-detail-permissions'
        }
    }
}
];

export const FAMILY_MODULE_DECLARATIONS = [
    FamilyHomeComponent,
    FamilyNewComponent,
    FamilyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule { }