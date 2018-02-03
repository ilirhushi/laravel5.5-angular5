import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';


// Prepare routes for application
export const routes: Routes = [
    // example how to use Routes
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
