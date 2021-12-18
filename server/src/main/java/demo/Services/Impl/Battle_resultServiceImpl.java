package demo.Services.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import demo.entities.Battle_result;
import demo.repositories.Battle_resultRepository;
import demo.Services.Battle_resultService;

import java.util.Date;
import java.util.List;

@Service
public class Battle_resultServiceImpl implements Battle_resultService {
    @Autowired
    private Battle_resultRepository battle_resultRepository;

    @Override
    public List<Battle_result> getAll() {
        return battle_resultRepository.findAll();
    }

    @Override
    public void setResult(int a, String b, boolean c, String province) {
        Date date = new Date(Long.parseLong(b));
        battle_resultRepository.setBattle(a, date,c,province);
    }
}