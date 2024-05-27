import { Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from '../auth/pages/login/login.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '', component: DashboardLayoutComponent, children: [
            // { path: 'login', component: LoginComponent }
        ]
    }
];

