package com.example.demo.controllers;

import com.example.demo.repositories.LeaderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.Race;
import com.example.demo.Services.RaceService;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/hero")
public class RaceController {

    @Autowired
    private RaceService raceService;

    @RequestMapping(value = "/get", method = { RequestMethod.POST, RequestMethod.GET} )
    public @ResponseBody Race getHero(@RequestBody JsonNode requestBody) {
        return raceService.getHeroByRace(requestBody.get("race").toString());
    }
    @RequestMapping(value = "/allPower", method = { RequestMethod.POST, RequestMethod.GET} )
    public @ResponseBody int getAllPower(@RequestBody JsonNode requestBody) {
        return Integer.parseInt(raceService.getAllPowerOfRace(requestBody.get("race").toString()));
    }
    @RequestMapping(value = "/races", method = { RequestMethod.POST, RequestMethod.GET} )
    public @ResponseBody List<Race> getAllRaces() {
        return raceService.getAllRaces();
    }
}
