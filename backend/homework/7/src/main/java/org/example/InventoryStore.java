// InventoryStore.java
package org.example;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Scope("singleton")
public class InventoryStore {

    private List<Vehicle> factory1Inventory = new ArrayList<>();
    private List<Vehicle> factory2Inventory = new ArrayList<>();

    public void addToFactory1Inventory(Vehicle vehicle) {
        factory1Inventory.add(vehicle);
    }

    public void addToFactory2Inventory(Vehicle vehicle) {
        factory2Inventory.add(vehicle);
    }

    public List<Vehicle> getFactory1Inventory() {
        return factory1Inventory;
    }

    public List<Vehicle> getFactory2Inventory() {
        return factory2Inventory;
    }
}
