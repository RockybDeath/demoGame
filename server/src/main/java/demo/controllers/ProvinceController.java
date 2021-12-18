package demo.controllers;

import demo.repositories.LeaderRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import demo.entities.Province;
import demo.Services.ProvinceService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/map")
public class ProvinceController {

    @Autowired
    private ProvinceService provinceService;

    @RequestMapping(value = "/all", method = { RequestMethod.POST, RequestMethod.GET} )
    public @ResponseBody Iterable<Province> getAllProvinces(){
        return provinceService.getAll();
    }
    @RequestMapping(value = "/capture", method = { RequestMethod.POST, RequestMethod.GET} )
    public void captureProvince(@RequestBody JsonNode requestBody){
        provinceService.updateProvince(requestBody.get("name").toString().replace("\"",""),requestBody.get("race").toString().replace("\"",""));
    }
    @RequestMapping(value = "/position")
    public int getFirstPosition(@RequestBody JsonNode requestBody){
        return provinceService.getFirstProvinceOfRace(requestBody.get("race").toString().replace("\"",""));
    }
    @RequestMapping(value = "/mining", method = { RequestMethod.POST, RequestMethod.GET} )
    public int miningAll(){
        provinceService.miningAllResources();
        return 1;
    }
}
