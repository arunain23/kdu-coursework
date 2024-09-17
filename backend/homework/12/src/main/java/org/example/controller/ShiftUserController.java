package org.example.controller;



import org.example.entity.ShiftUser;
import org.example.exception.CustomException;
import org.example.service.ShiftUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController

public class ShiftUserController {
    private final ShiftUserService shiftUserService;

    @Autowired
    public ShiftUserController(ShiftUserService shiftUserService) {
        this.shiftUserService = shiftUserService;
    }


    @GetMapping("/shifts/getShiftUsers")
    public ResponseEntity<List<ShiftUser>> getAllShiftUsers() {
        List<ShiftUser> allShiftUsers = shiftUserService.getAllShiftUsers();
        return new ResponseEntity<>(allShiftUsers, HttpStatus.OK);
    }


    @GetMapping("/shifts/{shiftUserId}")
    public ResponseEntity<ShiftUser> getShiftUserById(@PathVariable UUID shiftUserId) {
        ShiftUser retrievedShiftUser = shiftUserService.getShiftUserById(shiftUserId);
        if (retrievedShiftUser != null) {
            return new ResponseEntity<>(retrievedShiftUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/shift")
    public ResponseEntity<String> saveShiftUser(@RequestBody ShiftUser shiftUser) {
        shiftUserService.saveShiftUser(shiftUser);
        return new ResponseEntity<>("ShiftUser saved successfully", HttpStatus.CREATED);
    }


    @DeleteMapping("/shift/delete/{shiftUserId}")
    public ResponseEntity<String> deleteShiftUser(@PathVariable UUID shiftUserId) throws CustomException {
        shiftUserService.deleteShiftUser(shiftUserId);
        return new ResponseEntity<>("ShiftUser deleted successfully", HttpStatus.OK);
    }
}