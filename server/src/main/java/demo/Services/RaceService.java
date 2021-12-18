package demo.Services;
import org.springframework.stereotype.Service;
import demo.entities.Race;

import java.util.List;

public interface RaceService {

    Race getHeroByRace(String race);
    String getAllPowerOfRace(String race);
    List<Race> getAllRaces();
}