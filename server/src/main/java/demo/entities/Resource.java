package demo.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(schema = "public", name="resource")
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "stones")
    private Integer stones;

    @Column(name = "stones_mining")
    private Integer stones_mining;

    public Integer getGarrison_replenishment() {
        return garrison_replenishment;
    }

    @Column(name = "wood")
    private Integer wood;

    public int getId() {
        return id;
    }

    public Integer getGold_mining() {
        return gold_mining;
    }

    public Integer getStones_mining() {
        return stones_mining;
    }

    public Integer getWood_mining() {
        return wood_mining;
    }

    public Integer getSteel_mining() {
        return steel_mining;
    }

    public Integer getFood_mining() {
        return food_mining;
    }

    @Column(name = "wood_mining")
    private Integer wood_mining;

    @Column(name = "gold")
    private Integer gold;

    @Column(name = "gold_mining")
    private Integer gold_mining;


    @Column(name = "food")
    private Integer food;

    @Column(name = "food_mining")
    private Integer food_mining;

    @Column(name = "steel")
    private Integer steel;

    @Column(name = "steel_mining")
    private Integer steel_mining;

    @Column(name = "garrison_replenishment")
    private Integer garrison_replenishment;

    @JsonBackReference
    @OneToOne(targetEntity = Province.class)
    private Province province;

}
