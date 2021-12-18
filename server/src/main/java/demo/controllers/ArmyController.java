package demo.controllers;
import demo.Services.ProvinceService;
import demo.entities.Province;
import demo.repositories.LeaderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import demo.entities.Army;
import demo.Services.ArmyService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/army")
public class ArmyController {
    @Autowired
    private ArmyService armyService;

    @RequestMapping(value = "/hero", method = { RequestMethod.POST, RequestMethod.GET} )
    public @ResponseBody Army getArmyOfHero(@RequestBody JsonNode requestBody){
        return armyService.getArmyHero(requestBody.get("leader").toString());
    }

    @RequestMapping(value = "/get", method = { RequestMethod.POST, RequestMethod.GET} )
    public void takeGarrison(@RequestBody JsonNode requestBody){
        armyService.updateArmy(Integer.parseInt(requestBody.get("leaderArmy").toString().replace("\"","")),Integer.parseInt(requestBody.get("change").toString().replace("\"","")));
        armyService.updateArmy(Integer.parseInt(requestBody.get("provinceArmy").toString().replace("\"","")), (-1)*Integer.parseInt(requestBody.get("change").toString().replace("\"","")));
    }
    @RequestMapping(value = "/set", method = { RequestMethod.POST, RequestMethod.GET} )
    public void setArmySize(@RequestBody JsonNode requestBody){
        armyService.updateArmy(Integer.parseInt(requestBody.get("id").toString().replace("\"","")),Integer.parseInt(requestBody.get("count").toString().replace("\"","")));
    }
}
