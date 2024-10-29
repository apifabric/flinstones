import { MenuRootItem } from 'ontimize-web-ngx';

import { AccommodationCardComponent } from './Accommodation-card/Accommodation-card.component';

import { ActivityCardComponent } from './Activity-card/Activity-card.component';

import { ActivityBookingCardComponent } from './ActivityBooking-card/ActivityBooking-card.component';

import { AttendeeCardComponent } from './Attendee-card/Attendee-card.component';

import { BookingCardComponent } from './Booking-card/Booking-card.component';

import { EventCardComponent } from './Event-card/Event-card.component';

import { FamilyCardComponent } from './Family-card/Family-card.component';

import { FamilyMemberCardComponent } from './FamilyMember-card/FamilyMember-card.component';

import { LocationCardComponent } from './Location-card/Location-card.component';

import { PackageCardComponent } from './Package-card/Package-card.component';

import { PackageBookingCardComponent } from './PackageBooking-card/PackageBooking-card.component';

import { ReviewCardComponent } from './Review-card/Review-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Accommodation', name: 'ACCOMMODATION', icon: 'view_list', route: '/main/Accommodation' }
    
        ,{ id: 'Activity', name: 'ACTIVITY', icon: 'view_list', route: '/main/Activity' }
    
        ,{ id: 'ActivityBooking', name: 'ACTIVITYBOOKING', icon: 'view_list', route: '/main/ActivityBooking' }
    
        ,{ id: 'Attendee', name: 'ATTENDEE', icon: 'view_list', route: '/main/Attendee' }
    
        ,{ id: 'Booking', name: 'BOOKING', icon: 'view_list', route: '/main/Booking' }
    
        ,{ id: 'Event', name: 'EVENT', icon: 'view_list', route: '/main/Event' }
    
        ,{ id: 'Family', name: 'FAMILY', icon: 'view_list', route: '/main/Family' }
    
        ,{ id: 'FamilyMember', name: 'FAMILYMEMBER', icon: 'view_list', route: '/main/FamilyMember' }
    
        ,{ id: 'Location', name: 'LOCATION', icon: 'view_list', route: '/main/Location' }
    
        ,{ id: 'Package', name: 'PACKAGE', icon: 'view_list', route: '/main/Package' }
    
        ,{ id: 'PackageBooking', name: 'PACKAGEBOOKING', icon: 'view_list', route: '/main/PackageBooking' }
    
        ,{ id: 'Review', name: 'REVIEW', icon: 'view_list', route: '/main/Review' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AccommodationCardComponent

    ,ActivityCardComponent

    ,ActivityBookingCardComponent

    ,AttendeeCardComponent

    ,BookingCardComponent

    ,EventCardComponent

    ,FamilyCardComponent

    ,FamilyMemberCardComponent

    ,LocationCardComponent

    ,PackageCardComponent

    ,PackageBookingCardComponent

    ,ReviewCardComponent

];