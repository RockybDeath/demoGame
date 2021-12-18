package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import demo.entities.Portals;

@Repository
public interface PortalsRepository  extends JpaRepository<Portals, Long> {
}