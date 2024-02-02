package org.example.controller;


import jakarta.servlet.http.HttpServletRequest;
import org.example.dao.CartDao;
import org.example.models.Cart;
import org.example.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;



@RestController
public class CartController {

    @Autowired
    CartService cartService;
    @Autowired
    CartDao cartDao;

    @RequestMapping(value = "/users/{idUser}/carts", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<Void> create(@RequestBody Cart cart, HttpServletRequest request) throws URISyntaxException {

        HttpHeaders header = new HttpHeaders();
       cartDao.save(cart);
        return new ResponseEntity<Void>(header, HttpStatus.CREATED);
    }




}