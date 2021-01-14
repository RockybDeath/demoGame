package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(schema = "s264430", name="fraction")
public class Fraction {
    @Id
    @Column(name = "name")
    private String name;

    @NonNull
    private enum buff_fraction{armor,strength,mining}

    @JsonBackReference
    @OneToMany(mappedBy = "fraction", targetEntity = Race.class)
    private List<Race> races;
}
