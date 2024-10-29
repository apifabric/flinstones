import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationHomeComponent } from './home/Location-home.component';
import { LocationNewComponent } from './new/Location-new.component';
import { LocationDetailComponent } from './detail/Location-detail.component';

const routes: Routes = [
  {path: '', component: LocationHomeComponent},
  { path: 'new', component: LocationNewComponent },
  { path: ':id', component: LocationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Location-detail-permissions'
      }
    }
  },{
    path: ':location_id/Accommodation', loadChildren: () => import('../Accommodation/Accommodation.module').then(m => m.AccommodationModule),
    data: {
        oPermission: {
            permissionId: 'Accommodation-detail-permissions'
        }
    }
},{
    path: ':location_id/Activity', loadChildren: () => import('../Activity/Activity.module').then(m => m.ActivityModule),
    data: {
        oPermission: {
            permissionId: 'Activity-detail-permissions'
        }
    }
},{
    path: ':location_id/Event', loadChildren: () => import('../Event/Event.module').then(m => m.EventModule),
    data: {
        oPermission: {
            permissionId: 'Event-detail-permissions'
        }
    }
}
];

export const LOCATION_MODULE_DECLARATIONS = [
    LocationHomeComponent,
    LocationNewComponent,
    LocationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }