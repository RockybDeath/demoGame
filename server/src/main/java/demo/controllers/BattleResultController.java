package demo.controllers;
import demo.repositories.LeaderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import demo.entities.Battle_result;
import demo.Services.Battle_resultService;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/result")
public class BattleResultController {
    @Autowired
    private Battle_resultService battle_resultService;

    @RequestMapping(value = "/set", method = { RequestMethod.POST, RequestMethod.GET} )
    public void setBattle(@RequestBody JsonNode requestBody){
        battle_resultService.setResult(Integer.parseInt(requestBody.get("id").toString().replace("\"","")), requestBody.get("date").toString().replace("\"",""), false,requestBody.get("province").toString().replace("\"",""));
    }
}
