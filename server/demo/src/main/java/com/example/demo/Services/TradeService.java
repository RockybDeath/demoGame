package com.example.demo.Services;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Trade;

import java.util.List;

public interface TradeService {

    List<Trade> getAll();
}