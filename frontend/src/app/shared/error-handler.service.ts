import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
 
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';
  
 
  constructor(private router: Router, private dialog: MatDialog) { }
 
  public handleError = (error: HttpErrorResponse) => {

    console.log("error: " + error);
    //console.log("error.statusText: "+ error.statusText);
    //console.log("error.error: "+ error.error);
    //console.log("error.status: "+ error.status);
    


    if(error.status === 500){
      this.handle500Error(error);
    }
    else if(error.status === 404){
      this.handle404Error(error)
    }
    else if(error.status === 0){
      this.handleServiceDownError(error);
    }
    else{
      this.handleOtherError(error);
    }
  }
 
  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }
 
  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }
 
  private handleOtherError = (error: HttpErrorResponse) => {

    this.createErrorMessage(error);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.data={'errorMessage': this.errorMessage };

    console.log("this.errorMessage: "+ this.errorMessage);
    dialogConfig.data = { 'errorMessage': this.errorMessage };
    this.dialog.open(ErrorDialogComponent, dialogConfig);
  }

  private handleServiceDownError = (error: HttpErrorResponse) => {    

    this.createErrorMessage(error);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.data={'errorMessage': "Connection Refused: backend service is down!" };

    this.dialog.open(ErrorDialogComponent, dialogConfig);
  }
 
  private createErrorMessage(error: HttpErrorResponse){
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
