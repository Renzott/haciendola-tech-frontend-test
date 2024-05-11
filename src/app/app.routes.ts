import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
];
