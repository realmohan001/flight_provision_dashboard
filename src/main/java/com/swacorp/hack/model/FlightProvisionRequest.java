package com.swacorp.hack.model;

public class FlightProvisionRequest {

	
	private String flightnumber;
	private String from;	
	private String to;
	private String water;
	private String softdrinks;
	private String alcoholicdrinks;
	private String snackpouches;
	
	private String noofpassengers;	
	private String gate;	
	private String departtime;
	private String flightstatus;
	private String status;
	private String updatedatetime;
	private String savings;
	

	
	public FlightProvisionRequest()
	{
		
	}


	
	

	





	public FlightProvisionRequest(String flightnumber, String from, String to, String water, String softdrinks,
			String alcoholicdrinks, String snackpouches, String noofpassengers, String gate, String departtime,
			String flightstatus, String status, String updatedatetime, String savings) {
		super();
		this.flightnumber = flightnumber;
		this.from = from;
		this.to = to;
		this.water = water;
		this.softdrinks = softdrinks;
		this.alcoholicdrinks = alcoholicdrinks;
		this.snackpouches = snackpouches;
		this.noofpassengers = noofpassengers;
		this.gate = gate;
		this.departtime = departtime;
		this.flightstatus = flightstatus;
		this.status = status;
		this.updatedatetime = updatedatetime;
		this.savings = savings;
	}











	public String getNoofpassengers() {
		return noofpassengers;
	}











	public void setNoofpassengers(String noofpassengers) {
		this.noofpassengers = noofpassengers;
	}











	public String getFlightnumber() {
		return flightnumber;
	}



	public void setFlightnumber(String flightnumber) {
		this.flightnumber = flightnumber;
	}



	public String getFrom() {
		return from;
	}



	public void setFrom(String from) {
		this.from = from;
	}



	public String getTo() {
		return to;
	}



	public void setTo(String to) {
		this.to = to;
	}



	public String getWater() {
		return water;
	}



	public void setWater(String water) {
		this.water = water;
	}



	public String getSoftdrinks() {
		return softdrinks;
	}



	public void setSoftdrinks(String softdrinks) {
		this.softdrinks = softdrinks;
	}



	public String getAlcoholicdrinks() {
		return alcoholicdrinks;
	}



	public void setAlcoholicdrinks(String alcoholicdrinks) {
		this.alcoholicdrinks = alcoholicdrinks;
	}



	public String getSnackpouches() {
		return snackpouches;
	}



	public void setSnackpouches(String snackpouches) {
		this.snackpouches = snackpouches;
	}



	public String getGate() {
		return gate;
	}



	public void setGate(String gate) {
		this.gate = gate;
	}



	public String getDeparttime() {
		return departtime;
	}



	public void setDeparttime(String departtime) {
		this.departtime = departtime;
	}



	public String getFlightstatus() {
		return flightstatus;
	}



	public void setFlightstatus(String flightstatus) {
		this.flightstatus = flightstatus;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public String getUpdatedatetime() {
		return updatedatetime;
	}



	public void setUpdatedatetime(String updatedatetime) {
		this.updatedatetime = updatedatetime;
	}



	public String getSavings() {
		return savings;
	}



	public void setSavings(String savings) {
		this.savings = savings;
	}
	


	
}