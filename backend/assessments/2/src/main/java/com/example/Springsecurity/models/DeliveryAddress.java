package com.example.Springsecurity.models;

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
@Table(name="Delivery_address")
public class DeliveryAddress {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String street;
    private String city;
    private String state;
    private int postalcode;

//    @ManyToOne
//    @JoinColumn(name="users_id")
//    private Users user;


}
