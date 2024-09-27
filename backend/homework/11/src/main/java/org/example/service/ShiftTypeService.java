package org.example.service;



import org.example.dao.ShiftTypeDao;
import org.example.model.ShiftType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ShiftTypeService {

    private ShiftTypeDao shiftTypeDao;

    @Autowired
    public ShiftTypeService(ShiftTypeDao shiftTypeDao){
        this.shiftTypeDao=shiftTypeDao;
    }


    public void saveShiftType(ShiftType shiftType) {
        shiftTypeDao.saveShiftType(shiftType);
    }


    public ShiftType getShiftTypeById(UUID shiftTypeId) {
        return shiftTypeDao.getShiftTypeById(shiftTypeId);
    }


    public ShiftType getShiftTypes(UUID tenantId) {
        return shiftTypeDao.getShiftTypeById(tenantId);
    }

}