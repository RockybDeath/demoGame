package demo.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(schema = "public", name="race")
public class Race {
    @Id
    private String name;

    @Column(name = "race_description")
    private String race_description;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "leader_name",foreignKey = @ForeignKey(name = "race_leader_name_fkey"))
    private Leader leader;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "fraction_name",foreignKey = @ForeignKey(name = "race_fraction_name_fkey"))
    private Fraction fraction;

    @NonNull
    private enum race_bonuses{health, intellect, mining};

    public String getName() {
        return name;
    }
}
