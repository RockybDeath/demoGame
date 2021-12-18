package demo.Services;
import org.springframework.stereotype.Service;
import demo.entities.Trade;

import java.util.List;

public interface TradeService {

    List<Trade> getAll();
}