package org.example.service;


import org.example.dao.UserDao;
import org.example.exception.CustomException;
import org.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private final UserDao userDao;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserService(UserDao userDao, JdbcTemplate jdbcTemplate) {
        this.userDao = userDao;
        this.jdbcTemplate = jdbcTemplate;
    }


    @Transactional
    public void saveUser(User user) throws CustomException {
        try {
            userDao.saveUser(user);
        } catch (Exception e) {
            throw new CustomException("Failed to save user.");
        }
    }


    public List<User> getUsers(UUID tenantId) {
        return userDao.getUsers(tenantId);
    }

    public User getUserById(UUID userId) throws CustomException {
        try {
            return userDao.getUserById(userId);
        } catch (Exception e) {
            throw new CustomException("Exception Occured");
        }
    }

    @Transactional
    public void updateUser(UUID userId, User user) throws CustomException {
        try {
            String sql = "UPDATE users SET username = ?, tenant_id = ?, updated_by = ?, updated_at = ? WHERE id = ?";
            jdbcTemplate.update(sql, user.getUserName(), user.getTenantId(), user.getUpdatedBy(), new Timestamp(System.currentTimeMillis()), userId);
        } catch (Exception e) {
            throw new CustomException("Failed to update user.");
        }
    }
}