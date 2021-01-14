package com.example.demo.repositories;
import com.example.demo.entities.FractionResources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Army;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ArmyRepository  extends JpaRepository<Army, Long> {
    @Transactional
    @Modifying
    @Query("update Army a set a.size = a.size + :size where a.id = :id")
    void updateArmy(@Param(value = "id") int id, @Param(value = "size") int size);
}