package demo.Services.Impl;
import demo.entities.Race;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import demo.entities.Army;
import demo.repositories.ArmyRepository;
import demo.Services.ArmyService;

import java.util.List;

@Service
public class ArmyServiceImpl implements ArmyService {
    @Autowired
    private ArmyRepository armyRepository;

    @Override
    public Army getArmyHero(String leader) {
        leader = leader.replace("\"","");
        List<Army> armyList = armyRepository.findAll();
        for (int i = 0; i < armyList.size(); i++) {
            if(armyList.get(i).getLeader() != null) {
                String name = armyList.get(i).getLeader().getName().trim();
                if (name.equals(leader.trim())) {
                    return armyList.get(i);
                }
            }
        }
        return null;
    }

    @Override
    public void updateArmy(int id, int size) {
        armyRepository.updateArmy(id,size);
    }
}
