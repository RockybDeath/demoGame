package demo.entities;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(schema = "public", name= "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="token")
    private String token;

    public Person(String name, String email){
        this.name = name;
        this.email = email;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, email);
    }

    public String getToken() {
        return token;
    }
}
