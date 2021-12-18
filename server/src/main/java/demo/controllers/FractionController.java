package demo.controllers;
import demo.entities.FractionResources;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import demo.entities.Fraction;
import demo.Services.FractionService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/fraction")
public class FractionController {
    @Autowired
    private FractionService fractionService;

    @RequestMapping(value = "/getAllResources", method = { RequestMethod.POST, RequestMethod.GET} )
    public FractionResources getAll(@RequestBody JsonNode requestBody) {
        return fractionService.getAllResources(requestBody.get("race").toString());
    }
}
