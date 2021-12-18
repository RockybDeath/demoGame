package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import demo.entities.Characteristics;

@Repository
public interface CharacteristicsRepository  extends JpaRepository<Characteristics, Long> {
}