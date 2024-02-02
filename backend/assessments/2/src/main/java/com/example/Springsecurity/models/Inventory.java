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
@Table(name="Inventory")
public class Inventory {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    private String email;

    @OneToMany
    private Product products;
}
