import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InflightRoutingModule } from './inflight-routing.module';
import { InflightCheckComponent } from './inflight-check/inflight-check.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InflightCheckComponent],
  imports: [
    CommonModule,
    InflightRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InflightModule { }
