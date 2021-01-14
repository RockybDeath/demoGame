package com.example.demo.controllers;
import com.example.demo.Services.ArmyService;
import com.example.demo.Services.ProvinceService;
import com.example.demo.entities.Army;
import com.example.demo.entities.Province;
import com.example.demo.repositories.LeaderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.Leader;
import com.example.demo.Services.LeaderService;

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
