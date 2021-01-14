package com.example.demo.Services;
import com.example.demo.entities.FractionResources;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Fraction;

import java.util.List;

public interface FractionService {

    List<Fraction> getAll();
    FractionResources getAllResources(String race);
}