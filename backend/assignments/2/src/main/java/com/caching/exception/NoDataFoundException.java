package com.caching.exception;


public class NoDataFoundException extends NullPointerException {
    public NoDataFoundException(String message) {
        super(message);
    }
}