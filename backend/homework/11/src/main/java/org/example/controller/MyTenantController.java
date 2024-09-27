package org.example.controller;



import org.example.dto.DataDto;
import org.example.exception.CustomException;
import org.example.model.*;
import org.example.service.*;
import lombok.extern.slf4j.Slf4j;
import org.example.service.ShiftService;
import org.example.service.TenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Controller class for handling tenant-related operations.
 */
@Slf4j
@RestController
public class MyTenantController {

    private final TenantService tenantService;


    private final ShiftService shiftService;


    private final UserService userService;

    private final ShiftTypeService shiftTypeService;

    private final UserShiftService userShiftService;

    /**
     * Constructor to inject services into the controller.
     *
     * @param tenantService     Service for handling tenant-related operations.
     * @param shiftService      Service for handling shift-related operations.
     * @param userService       Service for handling user-related operations.
     * @param shiftTypeService   Service for handling shift type-related operations.
     * @param userShiftService   Service for handling user shift-related operations.
     */
    @Autowired
    public MyTenantController(TenantService tenantService, ShiftService shiftService, UserService userService,
                              ShiftTypeService shiftTypeService, UserShiftService userShiftService) {
        this.tenantService = tenantService;
        this.shiftService = shiftService;
        this.userService = userService;
        this.shiftTypeService = shiftTypeService;
        this.userShiftService = userShiftService;
    }


    @PostMapping("/shift_user")
    public ResponseEntity<String> saveUserShift(@RequestBody shiftUser userShift) {
        userShiftService.saveUserShift(userShift);
        return ResponseEntity.ok("ShiftUser saved successfully");
    }


    @GetMapping("shift_user/{tenantId}")
    public ResponseEntity<List<shiftUser>> getUserShift(@PathVariable UUID tenantId) {
        List<shiftUser> userShift = userShiftService.getUserShiftById(tenantId);
        return ResponseEntity.ok(userShift);
    }

    @PostMapping("/users")
    public ResponseEntity<String> saveUser(@RequestBody User user) throws CustomException {
        userService.saveUser(user);
        return ResponseEntity.ok("User Saved Successfully");
    }


    @GetMapping("/users/{tenantId}")
    public ResponseEntity<List<User>> getUser(@PathVariable UUID tenantId) {
        List<User> user = userService.getUsers(tenantId);
        return ResponseEntity.ok(user);
    }


    @GetMapping("/users/{userId}")
    public ResponseEntity<User> getUserbyId(@PathVariable UUID userId) throws CustomException {
        User user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }


    @PutMapping("/updateuser/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable UUID userId, @RequestBody User user) throws CustomException {
        userService.updateUser(userId, user);
        return ResponseEntity.ok("User updated Successfully");
    }

    @PostMapping("/data")
    public ResponseEntity<String> saveTenantData(@RequestBody DataDto data) {
        try {
            tenantService.saveTenantData(data);
            return ResponseEntity.ok("Data saved Successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error Occured while adding data");
        }
    }


    @PostMapping("/shifts")
    public ResponseEntity<String> saveShift(@RequestBody Shift shift) throws CustomException {
        shiftService.saveShift(shift);
        return ResponseEntity.ok("Shift saved");
    }


    @GetMapping("/shifts/{tenantId}")
    public ResponseEntity<Shift> getShift(@PathVariable UUID tenantId) throws CustomException {
        Shift shift =  shiftService.getShift(tenantId);
        log.info("shift entered");
        return ResponseEntity.ok(shift);
    }



    @PostMapping("/shift_type")
    public ResponseEntity<String> saveShiftType(@RequestBody ShiftType shiftType) {
        shiftTypeService.saveShiftType(shiftType);
        return ResponseEntity.ok("ShiftType saved successfully");
    }


    @GetMapping("/shift_types/{tenantId}")
    public ResponseEntity<List<ShiftType>> getShiftType(@PathVariable UUID tenantId) {
        List<ShiftType> shiftType = (List<ShiftType>) shiftTypeService.getShiftTypes(tenantId);
        return ResponseEntity.ok(shiftType);
    }

    @GetMapping("/tenant")
    public ResponseEntity<List<Tenant>> getAllTenants() {
        List<Tenant> tenants = tenantService.getAllTenants();
        return ResponseEntity.ok(tenants);
    }
}

