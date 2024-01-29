package com.caching.service;

import com.caching.dto.Address;
import com.caching.dto.GeoCoordinates;
import com.caching.exception.GeocodingException;
import com.caching.exception.NoDataFoundException;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Objects;


@Service
@Slf4j
public class GeocodingService {
    private static final Logger logger = LoggerFactory.getLogger(GeocodingService.class);

    @Value("${api-key}")
    private String positionstackApiKey;


    private final RestTemplate restTemplate=new RestTemplate();




    @Cacheable(value = "geocoding", key = "#address", unless = "#result == null or #result.latitude == null or #result.longitude == null or #address.equalsIgnoreCase('goa')")
    public GeoCoordinates getGeocoding(String address) throws Exception {

        if(address.length()<3){
            throw new Exception("Please enter valid address");
        }

        String encodedAddress = URLEncoder.encode(address, StandardCharsets.UTF_8);
        String apiUrl = "http://api.positionstack.com/v1/forward?access_key=" + positionstackApiKey + "&query=" + encodedAddress;
        JsonNode response = restTemplate.getForObject(apiUrl, JsonNode.class);

       JsonNode dataRetreived=null;

        try {

            dataRetreived = response.get("data").get(0);
        } catch (NullPointerException | NumberFormatException e) {
            throw new NoDataFoundException("Please enter valid coordinates");
        }
        if (Objects.isNull(dataRetreived)) {
            throw new NoDataFoundException("Data object is null");
        }

        try{
            Double doubleLatitude= dataRetreived.get("latitude").asDouble();
            Double doubleLongitude=dataRetreived.get("longitude").asDouble();
            return new GeoCoordinates(doubleLatitude,doubleLongitude);
        }
        catch (NullPointerException | NumberFormatException e ) {
            throw new GeocodingException("Invalid parameters: Latitude and Longitude must be valid numbers");

        }




    }




    @Cacheable(value = "reverse-geocoding", key = "{#latitude,#longitude}", unless = "#result == null or #result.address == null")
    public Address getReverseGeocoding(String latitude, String longitude) throws GeocodingException {
        logger.info("checking cache in reverse-geocoding");


        String query= latitude+","+longitude;


        String apiUrl = "http://api.positionstack.com/v1/reverse?access_key=" + positionstackApiKey + "&query=" + query;

        JsonNode response= restTemplate.getForObject( apiUrl, JsonNode.class);

        JsonNode dataRetreived = null;



        try {

            dataRetreived = response.get("data").get(0);
        } catch (NullPointerException | NumberFormatException e) {
            throw new NoDataFoundException("Please enter valid coordinates");
        }
        if (Objects.isNull(dataRetreived)) {
            throw new NoDataFoundException("Data object is null");
        }

        return new Address(dataRetreived.get("number").asInt());
    }





}
