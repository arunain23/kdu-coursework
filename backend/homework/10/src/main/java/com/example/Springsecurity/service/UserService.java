package com.example.Springsecurity.service;


import com.example.Springsecurity.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private List<User> store= new ArrayList<>();
    public UserService(){
        store.add(new User(UUID.randomUUID().toString(),"Arunain","arunain@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(),"Aakash","aakash@gmail.com"));

    }

    public User getUserByName(String userName) {
        return store.stream()
                .filter(user -> user.getName().equals(userName))
                .findFirst()
                .orElse(null);
    }

    public List<User> getUsers(){
        return this.store;
    }

    public void addUser(User user) {
        store.add(user);
    }
}
