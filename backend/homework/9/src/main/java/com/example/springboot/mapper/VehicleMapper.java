package com.example.springboot.mapper;


import com.example.springboot.dto.VehicleDto;
import com.example.springboot.entity.Vehicle;
public class VehicleMapper {
    public static Vehicle getVehicleObject(VehicleDto vehicleDto){
        Vehicle vehicle = new Vehicle(vehicleDto.getVehicleName(), vehicleDto.getVehiclePrice());
        return vehicle;
    }
    public static VehicleDto getVehicleDtoObject(Vehicle vehicle){
        VehicleDto vehicleDto = new VehicleDto(vehicle.getName(), vehicle.getPrice());
        return vehicleDto;
    }
}