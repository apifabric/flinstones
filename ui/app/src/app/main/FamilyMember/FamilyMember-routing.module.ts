import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMemberHomeComponent } from './home/FamilyMember-home.component';
import { FamilyMemberNewComponent } from './new/FamilyMember-new.component';
import { FamilyMemberDetailComponent } from './detail/FamilyMember-detail.component';

const routes: Routes = [
  {path: '', component: FamilyMemberHomeComponent},
  { path: 'new', component: FamilyMemberNewComponent },
  { path: ':id', component: FamilyMemberDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FamilyMember-detail-permissions'
      }
    }
  },{
    path: ':family_member_id/ActivityBooking', loadChildren: () => import('../ActivityBooking/ActivityBooking.module').then(m => m.ActivityBookingModule),
    data: {
        oPermission: {
            permissionId: 'ActivityBooking-detail-permissions'
        }
    }
},{
    path: ':family_member_id/Attendee', loadChildren: () => import('../Attendee/Attendee.module').then(m => m.AttendeeModule),
    data: {
        oPermission: {
            permissionId: 'Attendee-detail-permissions'
        }
    }
},{
    path: ':family_member_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
}
];

export const FAMILYMEMBER_MODULE_DECLARATIONS = [
    FamilyMemberHomeComponent,
    FamilyMemberNewComponent,
    FamilyMemberDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyMemberRoutingModule { }