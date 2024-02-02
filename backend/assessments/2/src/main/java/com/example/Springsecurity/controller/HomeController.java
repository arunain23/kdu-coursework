//package com.example.Springsecurity.controller;
//
//
//import com.example.Springsecurity.models.Users;
//import com.example.Springsecurity.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.security.Principal;
//import java.util.List;
//
//@RestController
//@RequestMapping("/home")
//public class HomeController {
//
//    @Autowired
//    private UserService userService;
//
// //  http://localhost:8080/home/users
//    @GetMapping("/users")
//    public List<Users> getUser(){
//        System.out.println("getting users");
//        return userService.getUsers();
//    }
//
//    @GetMapping("/byName/{userName}")
//    public ResponseEntity<String> getUserByName(@PathVariable String userName) {
//        Users user = userService.getUserByName(userName);
//
//        if (user == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//
//        return new ResponseEntity<>(user.getName(), HttpStatus.OK);
//    }
//
//    @GetMapping("/current-user")
//    public String getLoggedInUser(Principal principal){
//        return principal.getName();
//    }
//
//
//    @PostMapping("/adduser")
//    public ResponseEntity<Void> addUser(@RequestBody Users user) {
//        userService.addUser(user);
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }
//}
