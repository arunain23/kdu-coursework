package org.example.service;



import java.util.Date;

import org.example.dao.CartDao;
import org.example.dao.ProductDao;
import org.example.models.Cart;
import org.example.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CartService{

    @Autowired
    CartDao cartDao;

    @Autowired
    ProductDao productDao;




    public Cart save(Cart cart) {
        return cartDao.save(cart);
    }




}