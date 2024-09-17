package org.example.controller;



import org.example.entity.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable UUID userId) {
        User retrievedUser = userService.getUserById(userId);
        if (retrievedUser != null) {
            return new ResponseEntity<>(retrievedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("/getUsers")
    public ResponseEntity<Page<User>> findAllUsers( @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "50") int size) {
        page = Math.max(0, page);
        size = Math.min(50, Math.max(1, size));
        Pageable pageable = PageRequest.of(page, size);
        Page<User> userPage = userService.getAllUsersInPage(pageable);

        return ResponseEntity.ok(userPage);
    }

    @PostMapping("/user")
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        userService.saveUser(user);
        return new ResponseEntity<>("User saved successfully", HttpStatus.CREATED);
    }

    @PutMapping("/user/{userId}")
    public ResponseEntity<String> updateUserDetails(@PathVariable UUID userId, @RequestParam String username, @RequestParam int loggedIn, @RequestParam String timeZone) {
        try {
            userService.updateUserDetails(userId, username, loggedIn, timeZone);
            return new ResponseEntity<>("User details updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update user details. User not found.", HttpStatus.NOT_FOUND);
        }
    }
}