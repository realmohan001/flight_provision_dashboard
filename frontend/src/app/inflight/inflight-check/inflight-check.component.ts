import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { FlightProvisionRequest } from 'src/app/FlightProvisionRequest';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { TcbackendService } from 'src/app/shared/tcbackend.service';

import {formatDate} from '@angular/common';
import { mlrequest } from 'src/app/mlrequest';
import { mlresponse } from 'src/app/mlresponse';

@Component({
  selector: 'app-inflight-check',
  templateUrl: './inflight-check.component.html',
  styleUrls: ['./inflight-check.component.css']
})
export class InflightCheckComponent implements OnInit {

  title = 'Provision Requestor';
  requestSubmitResponse=null;
  mlreponsedata: string;
  mlreponsedata_array: string[];

  status_array: string[] = ["MESSAGED","LOADED"];

  mlreqeustObj:mlrequest;


   flightProvisionRequestObj: FlightProvisionRequest


  mySub: Subscription;
  inFlightSearchResponse: String[];


  inFlightInvokerForm: FormGroup = new FormGroup({
    flightnumber: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    from: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    to: new FormControl('', [Validators.required, Validators.maxLength(3)])
  });

  inFlightRequestForm: FormGroup = new FormGroup({
    flightnumber: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    from: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    to: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    water: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    softdrinks: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    alcoholicdrinks: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    snackpouches: new FormControl('', [Validators.required, Validators.maxLength(10)]),

    gate: new FormControl('', [Validators.maxLength(10)]),
    noofpassengers: new FormControl('', [Validators.maxLength(10)]),
    departtime: new FormControl('', [Validators.maxLength(10)]),
    flightstatus: new FormControl('', [Validators.maxLength(10)]),
    status: new FormControl('', [ Validators.maxLength(10)]),
    savings: new FormControl('', [ Validators.maxLength(10)]),

  });



  constructor(public backendService: TcbackendService, private errorService: ErrorHandlerService,public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.inFlightSearchResponse = null;
    this.requestSubmitResponse="";


    this.inFlightRequestForm.controls['flightnumber'].disable()
    this.inFlightRequestForm.controls['from'].disable()
    this.inFlightRequestForm.controls['to'].disable()
  }

  onSubmit()
  {

    this.requestSubmitResponse="";

      //if not valid return
      if(!this.inFlightInvokerForm.valid) {
        return;
      }

      this.inFlightSearchResponse=["Invoked Sucessfully"];

      this.mlreqeustObj = new mlrequest();

      var randomNumber = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

      this.mlreqeustObj.value=(100+randomNumber).toString();

      //run the predictive Analysis here
      this.backendService.post_data_to_ml(this.mlreqeustObj).subscribe(res => {      
      
        console.log("resp: "+ res)     

        this.mlreponsedata = (res as mlresponse).json.replace('[[',"").replace(']]',"");
        console.log("resp: "+  this.mlreponsedata)   
        
        if(this.mlreponsedata!=null)
        {
          this.mlreponsedata_array = this.mlreponsedata.split(" ");

          console.log(this.mlreponsedata_array)

        }
      },
      (error) => {
        console.log("error: "+ error)
    
      });


      if(this.mlreponsedata_array==null)
      {
          //then set the form, so that the agent can change
          this.inFlightRequestForm.setValue({
            flightnumber: this.inFlightInvokerForm.get('flightnumber').value,
            from: this.inFlightInvokerForm.get('from').value.toUpperCase(),
            to: this.inFlightInvokerForm.get('to').value.toUpperCase(),
            water: '145',
            softdrinks: '150',
            alcoholicdrinks: '50',
            snackpouches: '150',
            gate: 'A12',
            noofpassengers: this.mlreqeustObj.value,
            departtime: '10/15/2021 1700',
            flightstatus: 'ON-TIME',
            status: 'LOADED',
            savings: '2%'
          });
    }
    else
    {
        //then set the form, so that the agent can change
        this.inFlightRequestForm.setValue({
          flightnumber: this.inFlightInvokerForm.get('flightnumber').value,
          from: this.inFlightInvokerForm.get('from').value.toUpperCase(),
          to: this.inFlightInvokerForm.get('to').value.toUpperCase(),
          water: this.mlreponsedata_array[0],
          softdrinks: this.mlreponsedata_array[4],
          alcoholicdrinks: this.mlreponsedata_array[3],
          snackpouches: this.mlreponsedata_array[1],
          gate: 'A12',
          noofpassengers: this.mlreqeustObj.value,
          departtime: '10/15/2021 1700',
          flightstatus: 'ON-TIME',
          status: 'LOADED',
          savings: '2%'
        });
    }
      
  }


  onClear() {

    console.log("Inside onClear() ");
    this.inFlightInvokerForm.setValue({
      flightnumber: '',
      from: '',
      to: '',
    
    });

    this.inFlightSearchResponse=null;
  }


  onSubmit_request_form()
  {
      //if not valid return
  // if(!this.inFlightRequestForm.valid) {
    //   return;
    // }

      console.log(this.inFlightRequestForm)
      console.log(this.inFlightRequestForm.get('water').value)


      this.flightProvisionRequestObj = new FlightProvisionRequest();

      this.flightProvisionRequestObj.flightnumber=this.inFlightInvokerForm.get('flightnumber').value
      this.flightProvisionRequestObj.from=this.inFlightInvokerForm.get('from').value.toUpperCase()
      this.flightProvisionRequestObj.to=this.inFlightInvokerForm.get('to').value.toUpperCase()
      this.flightProvisionRequestObj.water= this.inFlightRequestForm.get('water').value
      this.flightProvisionRequestObj.softdrinks=this.inFlightRequestForm.get('softdrinks').value
      this.flightProvisionRequestObj.alcoholicdrinks=this.inFlightRequestForm.get('alcoholicdrinks').value
      this.flightProvisionRequestObj.snackpouches=this.inFlightRequestForm.get('snackpouches').value



      this.flightProvisionRequestObj.departtime=formatDate(Date.now(),'yyyy-MM-dd HH:mm:ss','en-US');
      this.flightProvisionRequestObj.status=this.inFlightRequestForm.get('status').value
      this.flightProvisionRequestObj.savings= this.inFlightRequestForm.get('savings').value
      this.flightProvisionRequestObj.flightstatus='ON-TIME'
      this.flightProvisionRequestObj.updatedatetime=formatDate(Date.now(),'yyyy-MM-dd HH:mm:ss','en-US');
      this.flightProvisionRequestObj.noofpassengers=this.inFlightRequestForm.get('noofpassengers').value
      this.flightProvisionRequestObj.gate=this.inFlightRequestForm.get('gate').value

      this.backendService.post_data(this.flightProvisionRequestObj);

      this.requestSubmitResponse='Submitted Successfully'
  }


  onClear_request_form() {

    console.log("Inside onClear() ");
    this.inFlightRequestForm.setValue({
      flightnumber: '',
      from: '',
      to: '',
      water: '',
      softdrinks: '',
      alcoholicdrinks: '',
      snackpouches: '',
      status: '',
      savings: '',
      gate: 'A12',
      noofpassengers: 'A12',
      departtime: '10/15/2021 1700',
        flightstatus: 'ON-TIME',
    });

    this.requestSubmitResponse="";
  }

}
