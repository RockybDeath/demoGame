package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import demo.entities.Trade;

@Repository
public interface TradeRepository  extends JpaRepository<Trade, Long> {
}