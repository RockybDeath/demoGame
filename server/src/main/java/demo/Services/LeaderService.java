package demo.Services;
import org.springframework.stereotype.Service;
import demo.entities.Leader;

import java.util.List;

public interface LeaderService {

    Iterable<Leader> getHeroByRace();
    void giveExpHero(String name, int exp);
}