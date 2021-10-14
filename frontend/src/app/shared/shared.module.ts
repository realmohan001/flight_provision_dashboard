import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
 
@NgModule({
  imports: [  
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    SuccessDialogComponent,
    ErrorDialogComponent,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [SuccessDialogComponent, ErrorDialogComponent],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
