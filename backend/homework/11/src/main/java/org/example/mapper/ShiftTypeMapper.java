package org.example.mapper;



import org.example.model.ShiftType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class ShiftTypeMapper implements RowMapper<ShiftType> {

    @Override
    public ShiftType mapRow(ResultSet rs, int rowNum) throws SQLException {
        ShiftType shiftType = new ShiftType();
        shiftType.setCreatedAt(rs.getTimestamp("created_at"));
        shiftType.setUpdatedAt(rs.getTimestamp("updated_at"));
        shiftType.setTimeZone(rs.getString("time_zone"));
        shiftType.setTenantId(UUID.fromString(rs.getString("tenant_id")));
        shiftType.setCreatedBy(rs.getString("created_by"));
        shiftType.setCreatedBy(rs.getString("updated_by"));
        shiftType.setId(UUID.fromString(rs.getString("id")));
        shiftType.setUqName((rs.getString("uq_name")));
        shiftType.setDescription(rs.getString("description"));
        shiftType.setActive(rs.getBoolean("active"));

        return shiftType;
    }
}