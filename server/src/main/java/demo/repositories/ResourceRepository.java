package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import demo.entities.Resource;

@Repository
public interface ResourceRepository  extends JpaRepository<Resource, Long> {
}