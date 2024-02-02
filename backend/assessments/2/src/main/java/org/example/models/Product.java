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
@Table(name="Product")
public class Product extends BaseEntity{

    @Id
    private int id;

    private String name;
    private String description;
    private int price;
    private int stock_quantity;
    private int postalcode;



}

