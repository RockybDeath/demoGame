package demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(schema = "public", name="provinces")
public class Province {

    @Id
    @NonNull
    private String name;

    @NonNull
    private enum landscapes{mountain, forest, steppe}

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "resourсe_id",foreignKey = @ForeignKey(name = "province_resource_id_fkey"))
    private Resource resources;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "garrison_id",foreignKey = @ForeignKey(name = "province_garrison_id_fkey"))
    private Army army;

    @Column(name = "world_name")
    private String world_name;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "portal_name", foreignKey = @ForeignKey(name = "province_portal_id_fkey"))
    private Portals portal;

    public Race getRace() {
        return race;
    }

    public String getName() {
        return name;
    }

    public Army getArmy() {
        return army;
    }

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "race_name", foreignKey = @ForeignKey(name = "provinces_race_name_fkey"))
    private Race race;

    public Resource getResources() {
        return resources;
    }

    @JsonBackReference
    @OneToMany(mappedBy = "province", targetEntity = Battle_result.class)
    private List<Battle_result> battle_result;
}
