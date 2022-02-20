package demo.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import demo.Services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @RequestMapping(value = "/register", method = { RequestMethod.POST, RequestMethod.GET} )
    public JsonNode registerNewUser(@RequestBody JsonNode requestBody){
        return personService.createPerson(requestBody.get("name").toString().replace("\"",""),requestBody.get("email").toString().replace("\"",""));
    }
    @RequestMapping(value = "/sign", method = { RequestMethod.POST, RequestMethod.GET} )
    public boolean signUser(@RequestBody JsonNode requestBody){
        return personService.signPerson(requestBody.get("token").toString().replace("\"",""));
    }
}
