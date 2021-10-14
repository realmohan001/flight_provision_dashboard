import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HostStatusPostRequest } from '../HostStatusPostRequest';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class backendService {

  public loadedForSpinner:boolean=false;

  //private baseUrl = 'http://localhost:8080/tcserver/apps'
  //private baseUrlPost = 'http://localhost:8080/restinvokescript/'
  //private baseUrl = 'http://xlpwsm01:50012/tcserver/apps'
  //private baseUrlPost = 'http://xlpwsm01:50012/restinvokescript/'


  private baseUrl =  environment["tcserver.baseurl"];

  private baseUrlPost = environment["invoke.shell.script"];

  constructor(private http: HttpClient) { }

  getApps(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
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
