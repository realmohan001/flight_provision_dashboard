import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardProvisionComponent } from './dashboard-provision/dashboard-provision.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DashboardProvisionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  exports: [DashboardProvisionComponent]
})
export class DashboardModule { }

