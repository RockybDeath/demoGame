package demo.repositories;
import demo.entities.FractionResources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import demo.entities.Fraction;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface FractionRepository  extends JpaRepository<Fraction, Long> {
    @Query(nativeQuery = true, value = "select * from race_resources(:race)")
    List<BigInteger[]> getAllResourcesForFraction(@Param(value = "race") String race);
}