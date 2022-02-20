package demo.Services;

import com.fasterxml.jackson.databind.JsonNode;

public interface PersonService {

    JsonNode createPerson(String name, String email);
    boolean signPerson(String token);
}
