package com.example.demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Race;
import com.example.demo.repositories.RaceRepository;
import com.example.demo.Services.RaceService;

import java.util.ArrayList;
import java.util.List;

@Service
public class RaceServiceImpl implements RaceService {
    @Autowired
    private RaceRepository raceRepository;

    @Override
    public Race getHeroByRace(String race) {
            List<Race> raceList = raceRepository.findAll();
            race = race.replace("\"", "");
            for (int i = 0; i < raceList.size(); i++) {
                if (raceList.get(i).getName().equals(race)) {
                    return raceList.get(i);
                }
            }
            return null;
    }

    @Override
    public String getAllPowerOfRace(String race) {
        race = race.replace("\"","");
        return raceRepository.getAllPowerOfRace(race);
    }

    @Override
    public List<Race> getAllRaces() {
        return raceRepository.findAll();
    }
}