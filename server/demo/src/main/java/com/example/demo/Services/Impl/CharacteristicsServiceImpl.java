package com.example.demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Characteristics;
import com.example.demo.repositories.CharacteristicsRepository;
import com.example.demo.Services.CharacteristicsService;

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