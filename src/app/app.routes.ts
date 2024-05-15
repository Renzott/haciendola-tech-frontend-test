import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth/auth.guard';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'dashboard', loadComponent: () => import('./modules/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [authGuard]},
    {path: 'login', component: LoginComponent },
    {path: '**', component: NotFoundComponent},
];
