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
@Table(schema = "s264430", name="trade")
public class Trade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "stones")
    private Integer stones;

    @Column(name = "wood")
    private Integer wood;

    @Column(name = "gold")
    private Integer gold;

    @Column(name = "food")
    private Integer food;

    @Column(name = "steel")
    private Integer steel;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "prov_name",foreignKey = @ForeignKey(name = "trade_prov_name_fkey"))
    private Province province;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "art_name",foreignKey = @ForeignKey(name = "trade_art_name_fkey"))
    private Artifact artifact;

    @JsonBackReference
    @ManyToOne(targetEntity = Relationship.class)
    private Relationship relationship;
}
