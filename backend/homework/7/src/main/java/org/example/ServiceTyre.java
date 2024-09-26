// ServiceTyre.java
package org.example;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class ServiceTyre {

    private ServiceTyre() {
    }

    @Bean(name = "tyre1")
    public Tyre tyre1() {
        Tyre tyre = new Tyre();
        tyre.setBrand("MRF");
        tyre.setPrice(2200.0);
        return tyre;
    }

    @Bean(name = "tyre2")
    public Tyre tyre2() {
        Tyre tyre = new Tyre();
        tyre.setBrand("Bridgestone");
        tyre.setPrice(2000.0);
        return tyre;
    }
}
