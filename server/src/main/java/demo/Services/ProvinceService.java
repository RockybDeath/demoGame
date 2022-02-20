package demo.Services;
import org.springframework.stereotype.Service;
import demo.entities.Province;

import java.util.List;

public interface ProvinceService {

    List<Province> getAll();
    void updateProvince(String name, String race);
    String getFirstProvinceOfRace(String name);
    void miningAllResources();
}