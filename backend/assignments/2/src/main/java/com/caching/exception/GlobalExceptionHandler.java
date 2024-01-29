package com.caching.exception;




import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GeocodingException.class)
    public ResponseEntity<String> handleGeocodingException(GeocodingException ex) {
        // Customize the response for GeocodingException
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {NoDataFoundException.class})
    public ResponseEntity<String> handleNoDataFoundException(NoDataFoundException exception) {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        return new ResponseEntity<>("An unexpected internal server error occurred: \n" + ex.getMessage(), HttpStatus.BAD_REQUEST);
    }


}

