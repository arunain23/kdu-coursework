package org.example.service;



import org.example.dao.ShiftUserDao;
import org.example.entity.ShiftUser;
import org.example.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.List;
import java.util.UUID;

@Service
public class ShiftUserService {
    private final ShiftUserDao shiftUserDao;

    @Autowired
    public ShiftUserService(ShiftUserDao shiftUserDao) {
        this.shiftUserDao = shiftUserDao;
    }



    public List<ShiftUser> getAllShiftUsers() {
        return shiftUserDao.findAll();
    }

    public void saveShiftUser(ShiftUser shiftUser) {
        shiftUserDao.save(shiftUser);
    }

    public ShiftUser getShiftUserById(UUID shiftUserId) {
        return shiftUserDao.findById(shiftUserId).orElse(null);
    }

    public void deleteShiftUser(UUID shiftUserId) throws CustomException {
        List<ShiftUser> shiftUsers = shiftUserDao.findByShiftEndTimeAndId(Time.valueOf("23:00"), shiftUserId);

        if (!shiftUsers.isEmpty()) {
            shiftUserDao.deleteById(shiftUserId);
        } else {
            throw new CustomException("Exception Occured while finding the user");
        }
    }
}