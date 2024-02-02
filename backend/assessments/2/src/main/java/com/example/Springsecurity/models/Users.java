package com.example.Springsecurity.models;

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
@Table(name="users")
public class Users {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "users_id")
    private int id;

    private String name;
    private String email;
//    @JoinColumn(name = "address_id")
    @OneToMany
    private DeliveryAddress deliveryAddresses;
}
