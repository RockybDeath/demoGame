package com.example.demo.entities;

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
@Table(schema = "s264430", name= "army")
public class Army implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="Size")
    private int size;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "leader_name",foreignKey = @ForeignKey(name = "army_leader_name_fkey"))
    private Leader leader;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "char_id",foreignKey = @ForeignKey(name = "army_char_id_fkey"))
    private Characteristics characteristics;

    @JsonBackReference
    @OneToMany(mappedBy = "army",targetEntity = Battle.class)
    List<Battle> battles;

    @JsonBackReference
    @OneToOne(mappedBy = "army", targetEntity = Province.class)
    private Province province;

    public int getId() {
        return id;
    }

    @Column(name="power")
    private int power;

    public Leader getLeader() {
        return leader;
    }
}
