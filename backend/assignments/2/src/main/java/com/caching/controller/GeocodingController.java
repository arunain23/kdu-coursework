package com.caching.controller;

import com.caching.dto.Address;
import com.caching.dto.GeoCoordinates;
import com.caching.exception.GeocodingException;
import com.caching.service.GeocodingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GeocodingController {

    @Autowired
    private GeocodingService geocodingService;

    @GetMapping("/geocoding")
    public ResponseEntity<GeoCoordinates> forwardGeocoding(@RequestParam("address") String address) throws Exception {
        try{
            if (address == null || address.isBlank()) {
                throw new GeocodingException("address is blank");
            }
            GeoCoordinates result = geocodingService.getGeocoding(address);
            if (result== null) {
                throw new GeocodingException("null data fetched");
            }
            return ResponseEntity.ok(result);

        }
        catch (Exception e){
            throw new GeocodingException("error found");
        }

    }



    @GetMapping("/reverse-geocoding")
    public ResponseEntity<String> reverseGeocoding(@RequestParam("latitude") String latitude,
                                                    @RequestParam("longitude") String longitude) throws Exception {

        try{
            String result= String.valueOf(geocodingService.getReverseGeocoding(latitude, longitude).getAddress());
            return ResponseEntity.ok(result);
        }
        catch (NullPointerException | NumberFormatException e) {
            throw new GeocodingException("Invalid parameters: Latitude and Longitude must be valid numbers");
        }

    }
}
