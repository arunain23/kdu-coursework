package org.example.service;




import org.example.config.PersonUserDetails;
import org.example.dao.DeliveryAddressDao;
import org.example.dao.ProductDao;
import org.example.dao.RegisterUserDao;

import org.example.exception.CustomException;
import org.example.models.DeliveryAddress;
import org.example.models.Inventory;
import org.example.models.Product;
import org.example.models.RegisterUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {


    @Autowired
    RegisterUserDao registerUserDao;

    @Autowired
    PersonUserDetails personUserDetails;



    @Autowired
    ProductDao productDao;


    @Autowired
    Inventory inventory;


    @Autowired
    DeliveryAddressDao deliveryAddressDao;


//    public UserService(){
//        store.add(new Users(UUID.randomUUID().toString(),"Arunain","arunain@gmail.com"));
//        store.add(new Users(UUID.randomUUID().toString(),"Aakash","aakash@gmail.com"));
//
//    }
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
//        usersDao.save(user);
//    }

    public UserDetails registerUser(RegisterUser user) {
        registerUserDao.save(user);
        return personUserDetails.loadUserByUsername(user.getName());

    }


    public void addProduct(Product product){
        inventory.addToInventory(product);
        productDao.save(product);
    }


    public Optional<Product> getProductId(int id){
        return productDao.findById(id);
    }


    public void deleteProduct(int id) throws CustomException {
        try{
            productDao.deleteById(id);
        }
        catch (Exception e){
            throw new CustomException("Invalid id entered");
        }

    }

    public RegisterUser getUserFromUsername(String name) {
        for (RegisterUser p : registerUserDao.findAll()) {
            if (p.getName().equals(name)) {
                return p;
            }
        }
        return null;

    }

    public Optional<DeliveryAddress> getAddress(int id){
        Optional<DeliveryAddress> deliveryAddress=deliveryAddressDao.findById(id);
        return deliveryAddress;
    }


}
