package demo.Services.Impl;
import demo.entities.Race;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import demo.entities.Province;
import demo.repositories.ProvinceRepository;
import demo.Services.ProvinceService;

import java.util.List;

@Service
public class ProvinceServiceImpl implements ProvinceService {
    @Autowired
    private ProvinceRepository provinceRepository;

    @Override
    public List<Province> getAll() {
        return provinceRepository.findAll();
    }

    @Override
    public void updateProvince(String name, String race) {
        provinceRepository.updateProvince(name, race);
    }

    @Override
    public int getFirstProvinceOfRace(String name) {
        List<Province> provinces = provinceRepository.findAll();
        for(int i=0; i<provinces.size(); i++){
            if (provinces.get(i).getRace().getName().equals(name)) return i;
        }
        return 0;
    }

    @Override
    public void miningAllResources() {
        List<Province> provinces = provinceRepository.findAll();
        for(int i=0; i<provinces.size(); i++){
            provinceRepository.updateResourcesForProvince(provinces.get(i).getResources().getId(), provinces.get(i).getResources().getFood_mining(), provinces.get(i).getResources().getGold_mining(), provinces.get(i).getResources().getWood_mining(), provinces.get(i).getResources().getSteel_mining(), provinces.get(i).getResources().getStones_mining());
            provinceRepository.updateGarrisonForProvince(provinces.get(i).getArmy().getId(), provinces.get(i).getResources().getGarrison_replenishment());
        }
    }
}