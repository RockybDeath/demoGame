package demo;

import demo.controllers.ProvinceController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import demo.repositories.CustomRep.CustomRepositoryImpl;

@EnableJpaRepositories(repositoryBaseClass = CustomRepositoryImpl.class)
@SpringBootApplication
public class Bd4Application {

	public static void main(String[] args) {
		SpringApplication.run(Bd4Application.class, args);
	}
}
