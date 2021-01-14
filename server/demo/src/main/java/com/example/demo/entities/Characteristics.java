package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(schema = "s264430", name="characteristics")
public class Characteristics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="intellect")
    private Integer intellect;

    @Column(name="agillity")
    private Integer agillity;

    @Column(name="strength")
    private Integer strength;

    @Column(name="armor")
    private Integer armor;

    @JsonBackReference
    @OneToOne(mappedBy = "characteristics", targetEntity = Army.class)
    private Army army;

    @JsonBackReference
    @OneToOne(mappedBy = "char_id", targetEntity = Leader.class)
    private Leader leader;
}
