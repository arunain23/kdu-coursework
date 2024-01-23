// Factory1VehicleService.java
package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Factory1VehicleService {

    private ServiceTyre tyreService;
    private ServiceSpeaker speakerService;

    @Autowired
    public Factory1VehicleService(
            @Qualifier("tyre1") ServiceTyre tyreService,
            @Qualifier("speaker1") ServiceSpeaker speakerService) {
        this.tyreService = tyreService;
        this.speakerService = speakerService;
    }

    public Vehicle manufactureVehicle() {
        Tyre tyre = tyreService.tyre1();
        Speaker speaker = speakerService.speaker1();
        // Adjust prices based on location-specific factors
        double vehiclePrice = calculateVehiclePrice(tyre.getPrice(), speaker.getPrice());

        return new Vehicle(speaker, tyre, vehiclePrice);
    }

    private double calculateVehiclePrice(double tyrePrice, double speakerPrice) {
        // Adjust prices based on location-specific factors
        // For example, increase the tire price by 10%
        return tyrePrice * 1.1 + speakerPrice;
    }
}
