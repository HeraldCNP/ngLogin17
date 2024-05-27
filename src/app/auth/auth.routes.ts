import { Routes } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '', component: AuthLayoutComponent, children: [
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' }
        ]
    }

];

