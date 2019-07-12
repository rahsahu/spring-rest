package com.spring.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyAPI {

	
	@RequestMapping(value = "/check", method = { RequestMethod.GET,RequestMethod.POST })
	public ResponseEntity<String> helloAPI() {
		return new ResponseEntity<>("AA gaye suar ke baccho",HttpStatus.ACCEPTED);
	}

}
