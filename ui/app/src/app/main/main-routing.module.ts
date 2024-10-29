import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Accommodation', loadChildren: () => import('./Accommodation/Accommodation.module').then(m => m.AccommodationModule) },
    
        { path: 'Activity', loadChildren: () => import('./Activity/Activity.module').then(m => m.ActivityModule) },
    
        { path: 'ActivityBooking', loadChildren: () => import('./ActivityBooking/ActivityBooking.module').then(m => m.ActivityBookingModule) },
    
        { path: 'Attendee', loadChildren: () => import('./Attendee/Attendee.module').then(m => m.AttendeeModule) },
    
        { path: 'Booking', loadChildren: () => import('./Booking/Booking.module').then(m => m.BookingModule) },
    
        { path: 'Event', loadChildren: () => import('./Event/Event.module').then(m => m.EventModule) },
    
        { path: 'Family', loadChildren: () => import('./Family/Family.module').then(m => m.FamilyModule) },
    
        { path: 'FamilyMember', loadChildren: () => import('./FamilyMember/FamilyMember.module').then(m => m.FamilyMemberModule) },
    
        { path: 'Location', loadChildren: () => import('./Location/Location.module').then(m => m.LocationModule) },
    
        { path: 'Package', loadChildren: () => import('./Package/Package.module').then(m => m.PackageModule) },
    
        { path: 'PackageBooking', loadChildren: () => import('./PackageBooking/PackageBooking.module').then(m => m.PackageBookingModule) },
    
        { path: 'Review', loadChildren: () => import('./Review/Review.module').then(m => m.ReviewModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }