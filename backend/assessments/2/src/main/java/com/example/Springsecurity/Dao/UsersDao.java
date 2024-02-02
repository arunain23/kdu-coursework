package com.example.Springsecurity.Dao;

import com.example.Springsecurity.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;


@Repository
public interface UsersDao extends JpaRepository<Users, Integer> {
}
