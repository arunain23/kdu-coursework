package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        try (AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class)) {
            ServiceVehicle serviceVehicle = context.getBean(ServiceVehicle.class);
            logger.info("Price of the most expensive vehicle is: {}", serviceVehicle.findMostExpensiveVehicle().getPrice());
        }
    }
}


