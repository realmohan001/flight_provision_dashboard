/**
 * 
 */
package com.swacorp.hack.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.swacorp.hack.model.FlightProvisionRequest;



/**
 * @author e144489
 *
 */

@CrossOrigin("*")
@RestController
public class FlightProvisionContoller {
	
	private static final Logger logger = LoggerFactory.getLogger(FlightProvisionContoller.class);
	
	public static HashMap<String, FlightProvisionRequest> provisionRequestStoreMap = new java.util.HashMap<String, FlightProvisionRequest>();
	
	
	  @PostMapping("/flight/provision")  
	  private long saveSchedule(@RequestBody FlightProvisionRequest flightProvisionRequest)   
	  {  
		  
		  System.out.println(flightProvisionRequest.toString());
		  
		  String keyFromRequest = flightProvisionRequest.getFlightnumber()+"_"+flightProvisionRequest.getFrom()+"_"+flightProvisionRequest.getTo();
		  
		  if(provisionRequestStoreMap.containsKey(keyFromRequest))
		  {
			  provisionRequestStoreMap.remove(keyFromRequest);
			  provisionRequestStoreMap.put(keyFromRequest, flightProvisionRequest);
		  }
		  else
		  {
			  provisionRequestStoreMap.put(keyFromRequest, flightProvisionRequest);
		  }
		  
		  return 0;  
	  }  
	  
	  @GetMapping("/flight/provision")
	    List<FlightProvisionRequest> getAllSchedules() {
		  
		  List<FlightProvisionRequest> provisionRequests = new ArrayList<FlightProvisionRequest>(provisionRequestStoreMap.values());
		
	        return provisionRequests;
	    }


	

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
