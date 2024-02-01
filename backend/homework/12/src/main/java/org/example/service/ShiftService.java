package org.example.service;



import org.example.dao.ShiftDao;
import org.example.entity.Shift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ShiftService {

    private final ShiftDao shiftDao;

    @Autowired
    public ShiftService(ShiftDao shiftDao) {
        this.shiftDao = shiftDao;
    }

    public List<Shift> getAllShifts() {
        return shiftDao.findAll();
    }

    public void saveShift(Shift shift) {
        shiftDao.save(shift);
    }

    public Shift getShiftById(UUID shiftId) {
        return shiftDao.findById(shiftId).orElse(null);
    }


    public List<Shift> findTopThreeShiftsByDateRange(Date startDate, Date endDate) {
        return shiftDao.findTopThreeShiftsByDateRange(startDate, endDate);
    }
}