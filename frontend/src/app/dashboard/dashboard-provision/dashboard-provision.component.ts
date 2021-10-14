import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FlightProvisionRequest } from 'src/app/FlightProvisionRequest';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { TcbackendService } from 'src/app/shared/tcbackend.service';

@Component({
  selector: 'app-dashboard-provision',
  templateUrl: './dashboard-provision.component.html',
  styleUrls: ['./dashboard-provision.component.css']
})
export class DashboardProvisionComponent implements OnInit, OnDestroy {


  title = 'Provision Dashboard';

  displayedColumns: string[] = ['flightnumber', 'from', 'to', 'water', 'softdrinks', 'alcoholicdrinks', 'snackpouches', 'noofpassengers', 'gate', 'flightstatus', 'updatedatetime', 'status', 'savings'];
  flightProvisionRequests: Observable<FlightProvisionRequest[]>;
  public dataSource = new MatTableDataSource<FlightProvisionRequest>();
  public flightProvisionRequest = new FlightProvisionRequest();

  mySub: Subscription;

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  constructor(public backendService: TcbackendService, private errorService: ErrorHandlerService,public spinnerService: SpinnerService) { }

  ngOnInit(): void {

    console.log("Inside flight provisions request");
    this.getAllProvisionRequests();
    this.dataSource.paginator = this.paginator;

    //to set the default sort column, on page load
    this.sort.sort(({ id: 'flightnumber', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  public getAllProvisionRequests()
  {
    this.backendService.loadedForSpinner=false;


    this.mySub = this.backendService.get_data().subscribe(res => {
      this.dataSource.data = res as FlightProvisionRequest[];
    },
    (error) => {
      this.errorService.handleError(error);
    });
    
    this.backendService.loadedForSpinner=true;
    console.log(this.dataSource);
  }


  applyFilter(filterValue: String) {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }


  calculateBackGroundClasses_percentSaved(percentUsed:string)
  {
    return {
      'dot-green': true
    };

   
  }

  ngOnDestroy() {
    if (this.mySub) {
        this.mySub.unsubscribe();
    }

    if(this.dataSource)
    {
      this.dataSource=null;
    }

    if(this.flightProvisionRequests)
    {
      this.flightProvisionRequests=null;
    }
  }



}
