package com.example.demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Leader;
import com.example.demo.repositories.LeaderRepository;
import com.example.demo.Services.LeaderService;

import java.util.List;

@Service
public class LeaderServiceImpl implements LeaderService {
    @Autowired
    private LeaderRepository leaderRepository;

    @Override
    public List<Leader> getHeroByRace() {
        return leaderRepository.findAll();
    }

    @Override
    public void giveExpHero(String name, int exp) {
        leaderRepository.updateExpLeader(name, exp);
    }
}