package com.example.demo.Services.Impl;
import com.example.demo.entities.FractionResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Fraction;
import com.example.demo.repositories.FractionRepository;
import com.example.demo.Services.FractionService;

import java.math.BigInteger;
import java.util.List;

@Service
public class FractionServiceImpl implements FractionService {
    @Autowired
    private FractionRepository fractionRepository;

    @Override
    public List<Fraction> getAll() {
        return fractionRepository.findAll();
    }

    @Override
    public FractionResources getAllResources(String race) {
        race = race.replace("\"", "");
        List<BigInteger[]> bigIntegers = fractionRepository.getAllResourcesForFraction(race);
        FractionResources fractionResources = new FractionResources();
        fractionResources.setStones(bigIntegers.get(0)[0]);
        fractionResources.setWood(bigIntegers.get(0)[1]);
        fractionResources.setGold(bigIntegers.get(0)[2]);
        fractionResources.setSteel(bigIntegers.get(0)[3]);
        fractionResources.setFood(bigIntegers.get(0)[4]);
        return fractionResources;
    }
}