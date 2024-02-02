//package com.example.Springsecurity.service;
//
//
//import com.example.Springsecurity.models.Users;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.UUID;
//
//@Service
//public class UserService {
//    private List<Users> store= new ArrayList<>();
////    public UserService(){
////        store.add(new Users(UUID.randomUUID(),"Arunain","arunain@gmail.com"));
////        store.add(new Users(UUID.randomUUID(),"Aakash","aakash@gmail.com"));
////
////    }
//
//    public Users getUserByName(String userName) {
//        return store.stream()
//                .filter(user -> user.getName().equals(userName))
//                .findFirst()
//                .orElse(null);
//    }
//
//    public List<Users> getUsers(){
//        return this.store;
//    }
//
//    public void addUser(Users user) {
//        store.add(user);
//    }
//
//
//}
