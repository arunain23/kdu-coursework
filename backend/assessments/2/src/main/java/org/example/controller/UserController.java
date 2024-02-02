package org.example.controller;



import org.example.exception.CustomException;
import org.example.models.DeliveryAddress;
import org.example.models.Product;
import org.example.models.RegisterUser;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private  UserService userService;




    @PostMapping("/register")
    public ResponseEntity<Void> registerUser(@RequestBody RegisterUser user){
        userService.registerUser(user);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }



    @PostMapping("/addProduct")
    public ResponseEntity<Void> addProduct(@RequestBody Product product) {
        userService.addProduct(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @GetMapping("/getProduct/{id}")
    public Optional<Product> getProduct(@RequestBody int id) {
        return userService.getProductId(id);

    }


    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<Void> deleteProduct(@RequestBody int id) throws CustomException {
        userService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }



    @GetMapping("/getAddress/{addressId}")
    public Optional<DeliveryAddress> getAddress(@RequestBody int addressId){
        return userService.getAddress(addressId);
    }











//    @PostMapping("/adduser")
//    public ResponseEntity<Void> addUser(@RequestBody Users user) {
//
//
////        System.out.println("before mapping");
//////        Users user = UserMapper.INSTANCE.userDtoToUser(userDto);
////        Users user= Mapper.UserDtoToUser(userDto);
////        System.out.println("after mapping");
//        userService.addUser(user);
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }

//    @PostMapping("/adduser")
//    public ResponseEntity<Void> addUser(@RequestBody User user) {
//        userService.addUser(user);
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }



}
