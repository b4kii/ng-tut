import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "",
        title: "Home",
        component: HomeComponent
    },
    {
        path: "user",
        title: "User",
        component: UserComponent
    },
    {
        path: "calendar",
        title: "Calendar",
        component: CalendarComponent
    },
];
