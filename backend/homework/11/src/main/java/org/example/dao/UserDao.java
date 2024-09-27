package org.example.dao;



import org.example.exception.CustomException;
import org.example.mapper.UserMapper;
import org.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class UserDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public List<User> getUsers(UUID tenantId) {
        String sql = "SELECT * FROM users WHERE tenant_id = ?";
        return jdbcTemplate.query(sql, new Object[]{tenantId}, new UserMapper());
    }

    public User getUserById(UUID userId) throws CustomException {
        String sql = "SELECT * FROM users WHERE id = ?";

        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{userId}, new BeanPropertyRowMapper<>(User.class));
        } catch (Exception e) {
            throw new CustomException("Exception Occured");
        }
    }

    public void saveUser(User user) {
        String sql = "INSERT INTO users (id, username, loggedIn, timeZone,tenant_id) VALUES (?, ?, ?, ?,?)";

        jdbcTemplate.update(sql,
                UUID.randomUUID(),
                user.getUserName(),
                user.getLoggedIn(),
                user.getTimeZone(),
                user.getTenantId()
        );
    }
}