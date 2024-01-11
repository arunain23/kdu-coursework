package org.example.question1;

public class InvalidDataException extends RuntimeException{
    InvalidDataException(String message, Throwable cause){
        super(message, cause);
    }
}