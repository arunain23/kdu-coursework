package com.example.springboot.service;

import com.example.springboot.Logging.Logg;
import com.example.springboot.dto.VehicleDto;
import com.example.springboot.entity.Vehicle;
import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.mapper.VehicleMapper;
import com.example.springboot.repository.InventoryRepository;
import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {

    public  static void addVehicles(Vehicle vehicle){
        Logg.logInfo("Vehicle added successfully");
        InventoryRepository.vehicles.add(vehicle);
    }
    public static Vehicle getVehicles(int id){

        int size= InventoryRepository.getArraysize();
        if(id>=size) throw new ResourceNotFoundException("Vehicle not found exception");

        Logg.logInfo("Vehicle fetched successfully");
        return InventoryRepository.vehicles.get(id);

    }
    public static void updateVehicles(int id, VehicleDto vehicleDto) throws BadRequestException {

        Vehicle vehicle = VehicleMapper.getVehicleObject(vehicleDto);
        int size= InventoryRepository.getArraysize();
        if(id>=size) throw new BadRequestException("Input entered is incorrect");
        Logg.logInfo("Vehicle updated successfully");
        InventoryRepository.vehicles.get(id).setName(vehicle.getName());
        InventoryRepository.vehicles.get(id).setPrice(vehicle.getPrice());

    }
    public static void deleteVehicles(int id){

        int size= InventoryRepository.getArraysize();
        if(id>=size) throw new ResourceNotFoundException("Vehicle not found");
        Logg.logInfo("Vehicle deleted successfully");
        InventoryRepository.vehicles.remove(id);
    }
    public static VehicleDto leastExpensive(){
        Logg.logInfo("Fetched the price of least Expensive vehicle");
        return VehicleMapper.getVehicleDtoObject(InventoryRepository.leastExpensive());
    }
    public static VehicleDto mostExpensive(){
        Logg.logInfo("Fetched the price of most Expensive vehicle");
        return VehicleMapper.getVehicleDtoObject(InventoryRepository.mostExpensive());
    }
}
