import { Routes } from '@angular/router';
import { isAuthenticateGuard } from './auth/guards/is-authenticate.guard';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';

export const routes: Routes = [
    {
        path: 'auth',
        canActivate: [isNotAuthenticatedGuard],
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
    },
    // {
    //     path: 'articles',
    //     loadChildren: () => import('./articles/articles.routes').then(m => m.ARTICLES_ROUTES)
    // },
    {
        path: 'dashboard',
        canActivate: [isAuthenticateGuard],
        loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    }
]; 
