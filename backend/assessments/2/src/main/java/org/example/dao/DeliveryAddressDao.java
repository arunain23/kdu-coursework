package org.example.dao;


import org.example.models.DeliveryAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;


@Repository
public interface DeliveryAddressDao extends JpaRepository<DeliveryAddress, Integer> {
}
