package org.example.dao;



import org.example.mapper.TenantMapper;
import org.example.model.Tenant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class TenantDao{

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public TenantDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public void saveTenant(Tenant tenant) {
        String sql = "INSERT INTO tenant (id, name, description, created_at, updated_at) " +
                "VALUES (?, ?, ?, ?, ?)";

        jdbcTemplate.update(sql,
                UUID.randomUUID(),
                tenant.getName(),
                tenant.getCreatedAt(),
                tenant.getUpdatedAt(),
                tenant.getCreatedBy(),
                tenant.getUpdatedBy()
        );
    }


    public List<Tenant> getAllTenants() {
        String sql = "SELECT * FROM tenants";
        return jdbcTemplate.query(sql, new TenantMapper());
    }

    public Tenant getTenantById(UUID tenantId) {
        String sql = "SELECT * FROM tenant WHERE id = ?";

        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{tenantId}, new TenantMapper());
        } catch (Exception e) {
            return null;
        }
    }



}