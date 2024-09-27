package org.example.service;



import org.example.dao.TenantDao;
import org.example.dto.DataDto;
import org.example.exception.CustomException;
import org.example.model.Tenant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TenantService {

    private final TenantDao tenantDao;
    private final ShiftService shiftService;
    private final UserService userService;
    private final ShiftTypeService shiftTypeService;
    private final UserShiftService userShiftService;

    @Autowired
    public TenantService(
            TenantDao tenantDao,
            ShiftService shiftService,
            UserService userService,
            ShiftTypeService shiftTypeService,
            UserShiftService userShiftService
    ) {
        this.tenantDao = tenantDao;
        this.shiftService = shiftService;
        this.userService = userService;
        this.shiftTypeService = shiftTypeService;
        this.userShiftService = userShiftService;
    }



    public List<Tenant> getAllTenants() {
        return tenantDao.getAllTenants();
    }


    @Transactional
    public void saveTenantData(DataDto tenantData) throws CustomException {
        tenantDao.saveTenant(tenantData.getTenant());

        shiftService.saveShift(tenantData.getShift());
        userService.saveUser(tenantData.getUser());
        shiftTypeService.saveShiftType(tenantData.getShiftType());
        userShiftService.saveUserShift(tenantData.getShiftUser());
    }
}
