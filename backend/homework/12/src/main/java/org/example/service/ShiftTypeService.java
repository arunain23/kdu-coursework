package org.example.service;



import org.example.dao.ShiftTypeDao;
import org.example.entity.ShiftType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class ShiftTypeService {
    private final ShiftTypeDao shiftTypeDao;

    @Autowired
    public ShiftTypeService(ShiftTypeDao shiftTypeDao) {
        this.shiftTypeDao = shiftTypeDao;
    }

    public ShiftType getShiftTypeById(UUID shiftTypeId) {
        return shiftTypeDao.findById(shiftTypeId).orElse(null);
    }


    public void saveShiftType(ShiftType shiftType) {
        shiftTypeDao.save(shiftType);
    }



    public List<ShiftType> getAllShiftTypes() {
        return shiftTypeDao.findAll();
    }
}
