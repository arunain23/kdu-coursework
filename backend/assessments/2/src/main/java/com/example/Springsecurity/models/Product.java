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
@Table(name="Product")
public class Product{

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "product_id")
    private int id;

    private String name;
    private String description;
    private int price;
    private int stock_quantity;
    private int postalcode;

//    name,
//    description, price, stock quantity,



}
