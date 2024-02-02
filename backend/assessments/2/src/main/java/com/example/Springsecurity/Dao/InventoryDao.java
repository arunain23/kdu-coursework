package com.example.Springsecurity.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;


@Repository
public interface InventoryDao extends JpaRepository<InventoryDao, Integer> {
}
