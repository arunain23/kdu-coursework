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

public class Inventory {

    private List<Product> inventorystore;

    public void addToInventory(Product product){
        inventorystore.add(product);

    }
}
