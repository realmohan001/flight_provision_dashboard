import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TcbackendService } from './shared/tcbackend.service';
import { ApachebackendService } from './shared/apachebackend.service';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component'
import {FlexLayoutModule} from '@angular/flex-layout';
import { CustomHttpInterceptor } from './http-interceptor';
import { BreakString } from './BreakString.pipe';
import { DashboardModule } from './dashboard/dashboard.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ServerErrorComponent,
    BreakString
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    DashboardModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

