package demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import demo.entities.Battle;
import demo.repositories.BattleRepository;
import demo.Services.BattleService;

import java.util.List;

@Service
public class BattleServiceImpl implements BattleService {
    @Autowired
    private BattleRepository battleRepository;

    @Override
    public List<Battle> getAll() {
        return battleRepository.findAll();
    }

    @Override
    public void setBattle(int id, int battle_id, boolean success, int cas, int prisoners) {
        battleRepository.setBattle(id, battle_id, success, cas, prisoners);
    }

    @Override
    public int getMax() {
        List<Battle> battles = battleRepository.findAll();
        int max = 0;
        for(int i=0; i<battles.size(); i++){
            if(battles.get(i).getResult().getId() > max) max = battles.get(i).getResult().getId();
        }
        return max+1;
    }
}