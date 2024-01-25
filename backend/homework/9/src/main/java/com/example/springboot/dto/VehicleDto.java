package com.example.springboot.dto;
public class VehicleDto {
    String vehicleName;
    double vehiclePrice;

    public VehicleDto(String vehicleName, double vehiclePrice) {
        this.vehicleName = vehicleName;
        this.vehiclePrice = vehiclePrice;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }

    public double getVehiclePrice() {
        return vehiclePrice;
    }

    public void setVehiclePrice(double vehiclePrice) {
        this.vehiclePrice = vehiclePrice;
    }
}
