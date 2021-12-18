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
@Table(schema = "public", name="portals")
public class Portals {

    @Id
    @NonNull
    private String name;

    @NonNull
    private enum affects{ill, poison, spoil}

    @JsonBackReference
    @OneToMany(mappedBy = "portal", targetEntity = Province.class)
    private List<Province> provinces;
}
