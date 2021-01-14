package com.example.demo.entities;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@IdClass(Battle.class)
@Table(schema = "s264430", name="battle")
public class Battle implements Serializable {
//    public Battle(Army army, Battle_result result) {
//        this.army = army;
//        this.result= result;
//    }
//    public Battle getId() {
//        return new Battle (
//                army, result
//        );
//    }
//    public Battle_result getResult(){
//        return result;
//    }
//    public Army getArmy(){
//        return army;
//    }
//    public void setId(Battle id) {
//        this.result= id.getResult();
//        this.army = id.getArmy();
//    }
    @Id
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "army_id",foreignKey = @ForeignKey(name = "battle_army_id_fkey"))
    private Army army;

    public Battle_result getResult() {
        return result;
    }

    @Id
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "battlerst_id",foreignKey = @ForeignKey(name = "battle_battlerst_id_fkey"))
    private Battle_result result;

    @Column(name="success")
    private boolean success;

    @Column(name="casualties")
    private Integer casualties;

    @Column(name="prisoners")
    private Integer prisoners;

}
