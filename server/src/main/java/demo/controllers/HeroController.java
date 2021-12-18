package demo.controllers;
import demo.Services.ArmyService;
import demo.Services.ProvinceService;
import demo.entities.Army;
import demo.entities.Province;
import demo.repositories.LeaderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import demo.entities.Leader;
import demo.Services.LeaderService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/hero")
public class HeroController {
    @Autowired
    private LeaderService leaderService;

    @RequestMapping(value = "/exp", method = { RequestMethod.POST, RequestMethod.GET} )
    public void setExpForHero(@RequestBody JsonNode requestBody){
        leaderService.giveExpHero(requestBody.get("name").toString().replace("\"",""),Integer.parseInt(requestBody.get("exp").toString().replace("\"","")));
    }
}
