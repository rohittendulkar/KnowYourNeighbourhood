package com.lithan.kynapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.lithan")
@EnableJpaRepositories("com.lithan")
@EntityScan("com.lithan.entities")

public class KynappApplication {

	public static void main(String[] args) {
		SpringApplication.run(KynappApplication.class, args);
	}

}
