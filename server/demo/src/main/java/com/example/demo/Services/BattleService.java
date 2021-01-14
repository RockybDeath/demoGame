package com.example.demo.Services;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Battle;

import java.util.List;

public interface BattleService {

    List<Battle> getAll();
    void setBattle(int id, int battle_id, boolean success, int cas, int prisoners);
    int getMax();
}