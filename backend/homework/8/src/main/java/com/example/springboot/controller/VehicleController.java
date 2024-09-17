package com.example.springboot.controller;
import com.example.springboot.dto.VehicleDto;
import com.example.springboot.mapper.VehicleMapper;
import com.example.springboot.entity.Vehicle;
import com.example.springboot.service.VehicleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
public class VehicleController {
    @PostMapping("/vehicle")
    public ResponseEntity<String> addVehicle(@RequestBody VehicleDto vehicleDto){
        VehicleService.addVehicles(
                VehicleMapper.getVehicleObject(vehicleDto));
        return ResponseEntity.ok("Vehicle Added successfully");
    }
    @GetMapping("/vehicle/{id}")
    public VehicleDto getVehicle(@PathVariable int id){
        return VehicleMapper.getVehicleDtoObject(
                VehicleService.getVehicles(id));
    }
    @PutMapping("/vehicle/update/{id}")
    public ResponseEntity<String> updateVehicle(@RequestBody VehicleDto vehicleDto, @PathVariable int id){
        VehicleService.updateVehicles( id, vehicleDto);
        return ResponseEntity.ok("Vehicle Updated successfully");
    }
    @DeleteMapping("/vehicle/delete/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable int id) {
        VehicleService.deleteVehicles(id);
        return ResponseEntity.ok("Vehicle deleted successfully");
    }
    @GetMapping("/vehicle/mostExpensive")
    public VehicleDto getExpensiveVehicle(){
        return VehicleService.mostExpensive();
    }
    @GetMapping("/vehicle/leastExpensive")
    public VehicleDto getLeastExpensiveVehicle(){
        return VehicleService.leastExpensive();
    }
}
