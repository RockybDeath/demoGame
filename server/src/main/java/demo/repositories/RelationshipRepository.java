package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import demo.entities.Relationship;

@Repository
public interface RelationshipRepository  extends JpaRepository<Relationship, Long> {
}