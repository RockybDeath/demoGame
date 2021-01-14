package com.example.demo.Services;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Army;

import java.util.List;

public interface ArmyService {

    Army getArmyHero(String name);
    void updateArmy(int id, int size);
}
