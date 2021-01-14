package com.example.demo.entities;


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
@Table(schema = "s264430", name="leader")
public class Leader {
    @Id
    @NonNull
    private String name;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "char_id",foreignKey = @ForeignKey(name = "leader_char_id_fkey"))
    private Characteristics char_id;

    @Column(name = "experience")
    @NonNull
    private int experience;
    @Column(name = "isalive")
    @NonNull
    private boolean isAlive;

    @JsonBackReference
    @OneToMany(mappedBy = "owner", targetEntity = Artifact.class)
    private List<Artifact> artifacts;

    @JsonBackReference
    @OneToOne(mappedBy = "leader", targetEntity = Army.class)
    private Army army;

    @JsonBackReference
    @OneToOne(mappedBy = "leader", targetEntity = Race.class)
    private Race race;

    public String getName() {
        return name;
    }
}
