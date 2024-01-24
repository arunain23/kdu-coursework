package com.example.springboot.service;

import com.example.springboot.dto.VehicleDto;
import com.example.springboot.entity.Vehicle;
import com.example.springboot.mapper.VehicleMapper;
import com.example.springboot.repository.InventoryRepository;
public class VehicleService {
    public  static void addVehicles(Vehicle vehicle){
        InventoryRepository.vehicles.add(vehicle);
    }
    public static Vehicle getVehicles(int id){
        return InventoryRepository.vehicles.get(id);
    }
    public static void updateVehicles(int id, VehicleDto vehicleDto){
        Vehicle vehicle = VehicleMapper.getVehicleObject(vehicleDto);
        InventoryRepository.vehicles.get(id).setName(vehicle.getName());
        InventoryRepository.vehicles.get(id).setPrice(vehicle.getPrice());

    }
    public static void deleteVehicles(int id){
        InventoryRepository.vehicles.remove(id);
    }
    public static VehicleDto leastExpensive(){
        return VehicleMapper.getVehicleDtoObject(InventoryRepository.leastExpensive());
    }
    public static VehicleDto mostExpensive(){
        return VehicleMapper.getVehicleDtoObject(InventoryRepository.mostExpensive());
    }
}
