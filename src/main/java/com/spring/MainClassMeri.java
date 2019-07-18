package com.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@ComponentScan("com.spring")
@EnableAspectJAutoProxy(proxyTargetClass=true)
@EnableJpaAuditing
public class MainClassMeri {
	public static void main(String arerere[]) {
		SpringApplication.run(MainClassMeri.class,arerere);
	}
}
