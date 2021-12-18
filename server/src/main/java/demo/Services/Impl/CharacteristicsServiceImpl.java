package demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import demo.entities.Characteristics;
import demo.repositories.CharacteristicsRepository;
import demo.Services.CharacteristicsService;

import java.util.List;

@Service
public class CharacteristicsServiceImpl implements CharacteristicsService {
    @Autowired
    private CharacteristicsRepository characteristicsRepository;

    @Override
    public List<Characteristics> getAll() {
        return characteristicsRepository.findAll();
    }
}