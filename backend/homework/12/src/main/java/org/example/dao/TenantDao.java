package org.example.dao;



import org.example.entity.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TenantDao extends JpaRepository<Tenant, UUID> {
}