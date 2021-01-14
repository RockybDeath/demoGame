package com.example.demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Trade;
import com.example.demo.repositories.TradeRepository;
import com.example.demo.Services.TradeService;

import java.util.List;

@Service
public class TradeServiceImpl implements TradeService {
    @Autowired
    private TradeRepository tradeRepository;

    @Override
    public List<Trade> getAll() {
        return tradeRepository.findAll();
    }
}