// Main.java
package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import java.util.Comparator;
import java.util.List;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    @Autowired
    private Factory1VehicleService factory1VehicleService;

    @Autowired
    private Factory2VehicleService factory2VehicleService;

    @Autowired
    private InventoryStore inventoryStore;

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Main main = context.getBean(Main.class);
        main.demo();
    }

    private void demo() {
        Vehicle factory1Vehicle = factory1VehicleService.manufactureVehicle();
        Vehicle factory2Vehicle = factory2VehicleService.manufactureVehicle();

        inventoryStore.addToFactory1Inventory(factory1Vehicle);
        inventoryStore.addToFactory2Inventory(factory2Vehicle);

        // Logic to print details of the highest and lowest priced vehicles
        printHighestAndLowestPriceVehicles(inventoryStore.getFactory1Inventory(), "Factory 1");
        printHighestAndLowestPriceVehicles(inventoryStore.getFactory2Inventory(), "Factory 2");

        // Print details of the most expensive vehicle
        Vehicle mostExpensiveVehicle = inventoryStore.getFactory1Inventory().stream()
                .max(Comparator.comparingDouble(Vehicle::getPrice))
                .orElse(null);

        if (mostExpensiveVehicle != null) {
            logger.info("Details of the most expensive vehicle in Factory 1: {}", mostExpensiveVehicle);
        } else {
            logger.info("No vehicles available in Factory 1");
        }

        mostExpensiveVehicle = inventoryStore.getFactory2Inventory().stream()
                .max(Comparator.comparingDouble(Vehicle::getPrice))
                .orElse(null);

        if (mostExpensiveVehicle != null) {
            logger.info("Details of the most expensive vehicle in Factory 2: {}", mostExpensiveVehicle);
        } else {
            logger.info("No vehicles available in Factory 2");
        }
    }

    private void printHighestAndLowestPriceVehicles(List<Vehicle> vehicles, String factoryName) {
        Vehicle highestPriceVehicle = vehicles.stream()
                .max(Comparator.comparingDouble(Vehicle::getPrice))
                .orElse(null);

        Vehicle lowestPriceVehicle = vehicles.stream()
                .min(Comparator.comparingDouble(Vehicle::getPrice))
                .orElse(null);

        logger.info("Details of the highest price vehicle from {}: {}", factoryName, highestPriceVehicle);
        logger.info("Details of the lowest price vehicle from {}: {}", factoryName, lowestPriceVehicle);
    }
}
