package com.example.demo.Services;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Race;

import java.util.List;

public interface RaceService {

    Race getHeroByRace(String race);
    String getAllPowerOfRace(String race);
    List<Race> getAllRaces();
}