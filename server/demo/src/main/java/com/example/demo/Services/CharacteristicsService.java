package com.example.demo.Services;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Characteristics;

import java.util.List;

public interface CharacteristicsService {

    List<Characteristics> getAll();
}