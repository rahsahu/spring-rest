package com.spring.aop;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class CustomAspect {
	Logger logger = LogManager.getLogger(CustomAspect.class);

	@Before(value = "execution(* com.spring..*.*(..))")
	public void beforeAdvice(JoinPoint joinPoint) {
		logger.info(
				"***********************************************************************************   Before method:"
						+ joinPoint.getSignature());

	}

	@After(value = "execution(* com.spring..*.*(..))")
	public void afterAdvice(JoinPoint joinPoint) {
		logger.info(
				"***********************************************************************************   After method:"
						+ joinPoint.getSignature());

	}
}