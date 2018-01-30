import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminTemplateComponent } from './admin-template/admin-template';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'admin-template', component: AdminTemplateComponent}
];

export const routing = RouterModule.forRoot(routes);
