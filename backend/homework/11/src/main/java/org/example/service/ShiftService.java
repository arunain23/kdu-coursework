package org.example.service;



import org.example.dao.ShiftDao;
import org.example.exception.CustomException;
import org.example.model.Shift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class ShiftService {

    private ShiftDao shiftDao;

    @Autowired
    public ShiftService(ShiftDao shiftDao){
        this.shiftDao=shiftDao;
    }


    @Transactional
    public void saveShift(Shift shift) throws CustomException {
        try {
            shiftDao.saveShift(shift);
        } catch (Exception e) {
            throw new CustomException("Failed to save shift.");
        }
    }


    public Shift getShift(UUID tenantId) throws CustomException {
        return shiftDao.getShiftById(tenantId);
    }
}