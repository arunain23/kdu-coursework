package org.example.models;


import jakarta.persistence.*;
import lombok.*;


import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Data
@Entity
@Table(name="users")
public class Users extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "users_id")
    private UUID id;

    private String name;
    private String email;

    @OneToMany
    private DeliveryAddress deliveryAddresses;
}
