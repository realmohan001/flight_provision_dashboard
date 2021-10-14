import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InflightCheckComponent } from './inflight-check/inflight-check.component';

const routes: Routes = [
  { path: '', component: InflightCheckComponent },
  { path: 'inflightcheck', component: InflightCheckComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InflightRoutingModule { }
