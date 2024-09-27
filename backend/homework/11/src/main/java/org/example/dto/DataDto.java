package org.example.dto;



import org.example.model.*;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@lombok.Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class DataDto {

    private User user;
    private Tenant tenant;
    private Shift shift;
    private ShiftType shiftType;
    private org.example.model.shiftUser shiftUser;
}