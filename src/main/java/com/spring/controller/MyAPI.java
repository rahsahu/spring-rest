package com.spring.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyAPI {

	Logger logger = LogManager.getLogger(MyAPI.class);

	@RequestMapping(value = "/check", method = { RequestMethod.GET, RequestMethod.POST })
	public ResponseEntity<String> helloAPI() {
		logger.info("Check API call ");
		return new ResponseEntity<>("Check done, Bye", HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "/status", method = { RequestMethod.GET, RequestMethod.POST })
	public ResponseEntity<String> statusAPI() {
		logger.info("Status API call ");
		return new ResponseEntity<>("Service is up", HttpStatus.ACCEPTED);
	}

}
