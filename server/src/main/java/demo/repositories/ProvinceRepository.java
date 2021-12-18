package demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import demo.entities.Province;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProvinceRepository  extends JpaRepository<Province, Long> {
    @Transactional
    @Modifying
    @Query("update Province p set p.race.name = :race where p.name = :name")
    void updateProvince(@Param(value = "name") String name, @Param(value = "race") String race);
    @Transactional
    @Modifying
    @Query("update Resource r set r.food = r.food+:food, r.gold = r.gold+:gold, r.wood = r.wood+:wood,r.stones = r.stones+:stones, r.steel = r.steel+:steel where r.id = :id")
    void updateResourcesForProvince(@Param(value = "id") int id, @Param(value = "food") int food, @Param(value = "gold") int gold, @Param(value = "wood") int wood, @Param(value = "steel") int steel, @Param(value = "stones") int stones);
    @Transactional
    @Modifying
    @Query("update Army a set a.size = a.size+:size where a.id = :id")
    void updateGarrisonForProvince(@Param(value = "id") int id, @Param(value = "size") int size);
}