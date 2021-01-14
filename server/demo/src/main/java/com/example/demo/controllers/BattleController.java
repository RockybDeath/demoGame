package com.example.demo.controllers;
import com.example.demo.repositories.LeaderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.Battle;
import com.example.demo.Services.BattleService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/battle")
public class BattleController {
    @Autowired
    private BattleService battleService;

    @RequestMapping(value = "/set", method = { RequestMethod.POST, RequestMethod.GET} )
    public void setBattle(@RequestBody JsonNode requestBody){
        battleService.setBattle(Integer.parseInt(requestBody.get("id").toString().replace("\"","")),Integer.parseInt(requestBody.get("battle_id").toString().replace("\"","")), requestBody.get("success").toString().replace("\"","").equals("true"),Integer.parseInt(requestBody.get("cas").toString().replace("\"","")),Integer.parseInt(requestBody.get("prisoners").toString().replace("\"","")));
    }
    @RequestMapping(value = "/max", method = { RequestMethod.POST, RequestMethod.GET} )
    public int maxIdBattle(){
        return battleService.getMax();
    }
}
