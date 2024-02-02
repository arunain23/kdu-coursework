package org.example.dao;


import org.example.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;



@Repository
public interface CartDao extends JpaRepository<Cart, UUID> {


}