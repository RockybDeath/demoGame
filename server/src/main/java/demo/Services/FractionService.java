package demo.Services;
import demo.entities.FractionResources;
import org.springframework.stereotype.Service;
import demo.entities.Fraction;

import java.util.List;

public interface FractionService {

    List<Fraction> getAll();
    FractionResources getAllResources(String race);
}