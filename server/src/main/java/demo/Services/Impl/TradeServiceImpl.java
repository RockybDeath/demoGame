package demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import demo.entities.Trade;
import demo.repositories.TradeRepository;
import demo.Services.TradeService;

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