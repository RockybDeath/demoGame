package demo.entities;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table
public class FractionResources implements Serializable {
    @Id
    @Type(type="pg-uuid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
    private int id;

    @Column(name = "stones")
    private BigInteger stones;

    public void setWood(BigInteger wood) {
        this.wood = wood;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSteel(BigInteger steel) {
        this.steel = steel;
    }

    public void setStones(BigInteger stones) {
        this.stones = stones;
    }

    public void setFood(BigInteger food) {
        this.food = food;
    }

    public void setGold(BigInteger gold) {
        this.gold = gold;
    }

    @Column(name = "wood")
    private BigInteger wood;

    @Column(name = "gold")
    private BigInteger gold;

    @Column(name = "food")
    private BigInteger food;

    @Column(name = "steel")
    private BigInteger steel;
}
