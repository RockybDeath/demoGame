package com.example.demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Battle;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface BattleRepository  extends JpaRepository<Battle, Long> {
    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "insert into Battle(army_id, battlerst_id, success, prisoners, casualties) VALUES(:id,:battle_id,:success,:cas,:prisoners)")
    void setBattle(@Param(value = "id") int id, @Param(value = "battle_id") int battle_id, @Param(value = "success") boolean success, @Param(value = "cas") int cas, @Param(value = "prisoners") int prisoners);
}