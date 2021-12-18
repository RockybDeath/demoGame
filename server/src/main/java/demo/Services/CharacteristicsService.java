package demo.Services;
import org.springframework.stereotype.Service;
import demo.entities.Characteristics;

import java.util.List;

public interface CharacteristicsService {

    List<Characteristics> getAll();
}