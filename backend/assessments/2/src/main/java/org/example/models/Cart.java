package org.example.models;



import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Data
@Entity
@Table(name="Delivery_address")
public class Cart extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID cartId;

    @OneToOne
    @JoinColumn(name = "users_id")
    private Users users;

    @OneToMany
    @JoinColumn(name="product_id")
    private Product products;
}
