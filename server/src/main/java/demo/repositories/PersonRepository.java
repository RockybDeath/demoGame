package demo.repositories;
import demo.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    @Transactional
    @Modifying
    @Query(value = "insert into Person(name, email, token) values (:name, :email, :token)", nativeQuery = true)
    void createNewUser(@Param(value = "name") String name, @Param(value = "email") String email, @Param(value = "token") String token);
}
