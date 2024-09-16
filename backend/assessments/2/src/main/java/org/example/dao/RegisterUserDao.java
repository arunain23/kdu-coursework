package org.example.dao;

import org.example.models.RegisterUser;
//import org.example.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RegisterUserDao extends JpaRepository<RegisterUser, UUID> {
}
