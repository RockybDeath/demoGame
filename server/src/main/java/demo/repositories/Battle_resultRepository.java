package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import demo.entities.Battle_result;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Repository
public interface Battle_resultRepository  extends JpaRepository<Battle_result, Long> {
    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "insert into battle_result(id, date, status_siege, province_name) VALUES(:id,:dater,:status,:province)")
    void setBattle(@Param(value = "id") int id, @Param(value = "dater") Date date, @Param(value = "status") boolean status, @Param(value = "province") String name);
}