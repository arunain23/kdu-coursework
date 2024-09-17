package org.example.controller;


import org.example.entity.Tenant;
import org.example.service.TenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TenantController {
    private final TenantService tenantService;

    @Autowired
    public TenantController(TenantService tenantService) {
        this.tenantService = tenantService;
    }


    @PostMapping("/create/tenant")
    public ResponseEntity<String> createTenant(@RequestBody String name) {
        tenantService.addTenant(name);
        return new ResponseEntity<>("Tenant created successfully", HttpStatus.CREATED);
    }


    @GetMapping("/getAllTenant")
    public ResponseEntity<List<Tenant>> getAllTenants() {
        List<Tenant> allTenants = tenantService.getAllTenant();
        return new ResponseEntity<>(allTenants, HttpStatus.OK);
    }
}