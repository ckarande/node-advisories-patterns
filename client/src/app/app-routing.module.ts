import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdvisoriesComponent } from './advisories/advisories.component';

const routes: Routes = [
  { path: '', redirectTo: '/advisories', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'advisories', component: AdvisoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }