import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HostStatusPostRequest } from '../HostStatusPostRequest';

import { environment } from '../../environments/environment';
import { FlightProvisionRequest } from '../FlightProvisionRequest';
import { mlrequest } from '../mlrequest';

@Injectable({
  providedIn: 'root'
})
export class TcbackendService {

  public loadedForSpinner:boolean=false;

  //private baseUrl = 'http://localhost:8080/tcserver/apps'
  //private baseUrlPost = 'http://localhost:8080/restinvokescript/'
  //private baseUrl = 'http://xlpwsm01:50012/tcserver/apps'
  //private baseUrlPost = 'http://xlpwsm01:50012/restinvokescript/'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  private baseUrl =  environment["tcserver.baseurl"];

  private baseUrlPost = environment["invoke.shell.script"];

  private base_ml_post = environment["ml.api"];


  private insert_base_url =  environment["flightprovision.post.baseurl"];
  private get_base_url =  environment["flightprovision.get.baseurl"];

  constructor(private http: HttpClient) { }

  getApps(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
  }

  post_data(flightProvision: FlightProvisionRequest) {

    console.log(this.insert_base_url);
    console.log(JSON.stringify(flightProvision));

    this.http.post(`${this.insert_base_url}`, JSON.stringify(flightProvision), this.httpOptions).subscribe(res => {      
      
      console.log(res)            
    },
    (error) => {
      console.log(error)         
    });
  }

  post_data_to_ml(mlrequestObj: mlrequest) : Observable<any> {

    console.log(this.base_ml_post);
    console.log(JSON.stringify(mlrequestObj));
   
    return this.http.post(`${this.base_ml_post}`, JSON.stringify(mlrequestObj), this.httpOptions);
  
  }

  get_data(): Observable<any> {
    return  this.http.get(`${this.get_base_url}`);
  }



  getApp(name: string): Observable<any> {

    //baseURLApps string: this.baseUrl.concat(name);
    return this.http.get(`${this.baseUrl}/${name}`);
    //return this.http.get(`${this.baseUrlApp}`);
  }

  getHostAppDetails(req: HostStatusPostRequest ): Observable<any> {
      
    return this.http.post(`${this.baseUrlPost}`, req,{responseType: 'json' });
   
  }
}
