package com.swacorp.hack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class HackConsoleApplication {

	public static void main(String[] args) {
		SpringApplication.run(HackConsoleApplication.class, args);
	}
}
