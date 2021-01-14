package com.example.demo.Services;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Province;

import java.util.List;

public interface ProvinceService {

    List<Province> getAll();
    void updateProvince(String name, String race);
    int getFirstProvinceOfRace(String name);
    void miningAllResources();
}