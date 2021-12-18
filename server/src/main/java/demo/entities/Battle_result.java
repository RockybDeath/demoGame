package demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(schema = "public", name="battle_result")
public class Battle_result implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    public int getId() {
        return id;
    }

    @Column(name = "date")
    private String date;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "province_name",foreignKey = @ForeignKey(name = "battle_result_province_name_fkey"))
    private Province province;

    @Column(name = "status_siege")
    private boolean status_siege;

    @JsonBackReference
    @OneToMany(mappedBy = "result", targetEntity = Battle.class)
    private List<Battle> battles;
}
