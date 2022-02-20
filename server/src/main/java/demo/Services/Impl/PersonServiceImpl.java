package demo.Services.Impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import demo.Services.PersonService;
import demo.entities.Person;
import demo.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public JsonNode createPerson(String name, String email) {
        try {
            if (name != null && email != null) {
                Person person = new Person(name, email);
                String token = Integer.toString(person.hashCode());
                personRepository.createNewUser(name, email, token);
                JsonNode jsonNode = new ObjectMapper().createObjectNode();
                ((ObjectNode) jsonNode).put("token", token);
                ((ObjectNode) jsonNode).put("result", true);
                return jsonNode;
            } else {
                return new ObjectMapper().readTree("{\"result\": \"false\"}");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean signPerson(String token) {
        return personRepository.findAll().stream().anyMatch((person) -> person.getToken().equals(token));
    }
}
