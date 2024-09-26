// ServiceVehicle.java
package org.example;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Component
public class ServiceVehicle {
    private static final Logger logger = LoggerFactory.getLogger(ServiceVehicle.class);

    private List<Vehicle> vehicles = new ArrayList<>();
    private Factory1VehicleService factory1VehicleService;
    private Factory2VehicleService factory2VehicleService;

    @Autowired
    public ServiceVehicle(Factory1VehicleService factory1VehicleService, Factory2VehicleService factory2VehicleService) {
        this.factory1VehicleService = factory1VehicleService;
        this.factory2VehicleService = factory2VehicleService;
    }

    public Vehicle findMostExpensiveVehicle() {
        return vehicles.stream()
                .max(Comparator.comparingDouble(Vehicle::getPrice))
                .orElse(null);
    }

    @PostConstruct
    public void addVehiclesToList() {
        Vehicle factory1Vehicle = factory1VehicleService.manufactureVehicle();
        vehicles.add(factory1Vehicle);

        Vehicle factory2Vehicle = factory2VehicleService.manufactureVehicle();
        vehicles.add(factory2Vehicle);
    }

    public void printDetailsOfMostExpensiveVehicle() {
        Vehicle mostExpensiveVehicle = findMostExpensiveVehicle();
        if (mostExpensiveVehicle != null) {
            logger.info("Details of the most expensive vehicle: {}", mostExpensiveVehicle);
        } else {
            logger.info("No vehicles available");
        }
    }
}
