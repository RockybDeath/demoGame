package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import demo.entities.Race;

@Repository
public interface RaceRepository  extends JpaRepository<Race, Long> {
    @Query(nativeQuery = true, value = "select race_power(:race)")
    String getAllPowerOfRace(@Param(value = "race") String race);
}