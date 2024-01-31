package org.example.dao;



import org.example.model.shiftUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class UserShiftDao {

    private final JdbcTemplate jdbcTemplate;


    public void saveUserShift(shiftUser userShift) {
        String sql = "INSERT INTO shift_users(id, shift_id, user_id, tenant_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        jdbcTemplate.update(sql,
                UUID.randomUUID(),
                userShift.getShiftId(),
                userShift.getUserId(),
                userShift.getTenantId()
        );
    }

    @Autowired
    public UserShiftDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }



    public List<shiftUser> getUserShiftsByUserId(UUID tenantId) {
        String sql = "SELECT * FROM shift_users WHERE tenant_id = ?";

        return jdbcTemplate.query(sql, new Object[]{tenantId}, new BeanPropertyRowMapper<>(shiftUser.class));
    }

}