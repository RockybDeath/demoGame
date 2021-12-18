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
@Table(schema = "public", name="artifact")
public class Artifact {
    @NonNull
    @Id
    @Column(name="name")
    private String name;

    @Column(name="intellect")
    private int intellect;

    @Column(name="agility")
    private int agility;

    @Column(name="strength")
    private int strength;

    @Column(name="armor")
    private int armor;


    private enum superbuffs{sleep,rage,heal};

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "leader_name",foreignKey = @ForeignKey(name = "artifact_leader_name_fkey"))
    private Leader owner;

    @JsonBackReference
    @OneToOne(mappedBy = "artifact", targetEntity = Trade.class)
    private Trade trade;
}
