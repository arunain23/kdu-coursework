package org.example.controller;


import org.example.entity.ShiftType;
import org.example.service.ShiftTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController

public class ShiftTypeController {
    private final ShiftTypeService shiftTypeService;


    @GetMapping("/shift/{shiftTypeId}")
    public ResponseEntity<ShiftType> getShiftTypeById(@PathVariable UUID shiftTypeId) {
        ShiftType retrievedShiftType = shiftTypeService.getShiftTypeById(shiftTypeId);
        if (retrievedShiftType != null) {
            return new ResponseEntity<>(retrievedShiftType, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("/shift/getShifts")
    public ResponseEntity<List<ShiftType>> getAllShiftTypes() {
        List<ShiftType> allShiftTypes = shiftTypeService.getAllShiftTypes();
        return new ResponseEntity<>(allShiftTypes, HttpStatus.OK);
    }

    @Autowired
    public ShiftTypeController(ShiftTypeService shiftTypeService) {
        this.shiftTypeService = shiftTypeService;
    }


    @PostMapping("/shift")
    public ResponseEntity<String> saveShiftType(@RequestBody ShiftType shiftType) {
        shiftTypeService.saveShiftType(shiftType);
        return new ResponseEntity<>("ShiftType saved successfully", HttpStatus.CREATED);
    }




}