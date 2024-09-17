package org.example.controller;



import org.example.entity.Shift;
import org.example.service.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController

public class ShiftController {
    private final ShiftService shiftService;

    @Autowired
    public ShiftController(ShiftService shiftService) {
        this.shiftService = shiftService;
    }


    @GetMapping("/shift/getShift")
    public ResponseEntity<List<Shift>> getAllShifts() {
        List<Shift> allShifts = shiftService.getAllShifts();
        return new ResponseEntity<>(allShifts, HttpStatus.OK);
    }


    @GetMapping("/shift/topShifts")
    public ResponseEntity<List<Shift>> getTopThreeShiftsByDateRange(
            @RequestParam("startDate") @DateTimeFormat(pattern = "dd-MMM-yyyy") Date startDate,
            @RequestParam("endDate") @DateTimeFormat(pattern = "dd-MMM-yyyy") Date endDate) {
        List<Shift> topThreeShifts = shiftService.findTopThreeShiftsByDateRange(startDate, endDate);
        return new ResponseEntity<>(topThreeShifts, HttpStatus.OK);
    }


    @PostMapping("/shift")
    public ResponseEntity<String> saveShift(@RequestBody Shift shift) {
        shiftService.saveShift(shift);
        return new ResponseEntity<>("Shift saved successfully", HttpStatus.CREATED);
    }


    @GetMapping("/shift/{shiftId}")
    public ResponseEntity<Shift> getShiftById(@PathVariable UUID shiftId) {
        Shift retrievedShift = shiftService.getShiftById(shiftId);
        if (retrievedShift != null) {
            return new ResponseEntity<>(retrievedShift, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}