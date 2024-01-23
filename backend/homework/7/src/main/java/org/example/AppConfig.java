// AppConfig.java
package org.example;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan({"org.example"})
@Import({Factory1VehicleService.class, Factory2VehicleService.class, InventoryStore.class})
public class AppConfig {
}
