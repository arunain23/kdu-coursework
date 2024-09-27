package org.example.service;

import org.example.dao.UserShiftDao;
import org.example.model.shiftUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserShiftService {

    private UserShiftDao userShiftDao;

    @Autowired
    public UserShiftService(UserShiftDao userShiftDao){
        this.userShiftDao=userShiftDao;
    }


    public void saveUserShift(shiftUser userShift) {
        userShiftDao.saveUserShift(userShift);
    }


    public List<shiftUser> getUserShiftById(UUID tenantId) {
        return userShiftDao.getUserShiftsByUserId(tenantId);
    }
}