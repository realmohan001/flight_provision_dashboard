import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardProvisionComponent } from './dashboard-provision/dashboard-provision.component';

const routes: Routes = [
  { path: '', component: DashboardProvisionComponent },
  { path: 'provisiondashboard', component: DashboardProvisionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
