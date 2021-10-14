// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  'tcserver.baseurl' : 'http://localhost:8080/tcserver/apps',  
  'apache.baseurl' : 'http://localhost:8080/apache/apps',
  'invoke.shell.script' : 'https://middleware-dashboard.prod.swacorp.com/restinvokescript/',


  'flightprovision.post.baseurl' : 'http://localhost:5000/flight/provision',
  'flightprovision.get.baseurl' : 'http://localhost:5000/flight/provision',
  'ml.api' : 'https://test-py-rest.herokuapp.com/predict'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
