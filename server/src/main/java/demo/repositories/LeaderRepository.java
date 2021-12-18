package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import demo.entities.Leader;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LeaderRepository  extends JpaRepository<Leader, Long> {
    @Transactional
    @Modifying
    @Query("update Leader l set l.experience = l.experience+:exp where l.name = :name")
    void updateExpLeader(@Param(value = "name") String name, @Param(value = "exp") int exp);
}