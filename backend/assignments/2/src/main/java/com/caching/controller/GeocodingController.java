package com.caching.controller;

import com.caching.dto.Address;
import com.caching.dto.GeoCoordinates;
import com.caching.service.GeocodingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api")
public class GeocodingController {

    @Autowired
    private GeocodingService geocodingService;

    @GetMapping("/geocoding")
    public ResponseEntity<GeoCoordinates> forwardGeocoding(@RequestParam("address") String address) throws Exception {

        GeoCoordinates result = geocodingService.getGeocoding(address);
        return ResponseEntity.ok(result);
    }



    @GetMapping("/reverse-geocoding")
    public ResponseEntity<String> reverseGeocoding(@RequestParam("latitude") String latitude,
                                                    @RequestParam("longitude") String longitude) throws Exception {
        String result=  geocodingService.getReverseGeocoding(latitude, longitude).getAddress();
        return ResponseEntity.ok(result);


    }
}
