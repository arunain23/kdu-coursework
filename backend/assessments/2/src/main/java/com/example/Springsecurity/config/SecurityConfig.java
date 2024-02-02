//package com.example.Springsecurity.config;
//
//import com.example.Springsecurity.security.JwtAuthenticationEntryPoint;
//import com.example.Springsecurity.security.JwtAuthenticationFilter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import static org.springframework.security.config.Customizer.withDefaults;
//
//@Configuration
//public class SecurityConfig {
//
//
//    @Autowired
//    private JwtAuthenticationEntryPoint point;
//    @Autowired
//    private JwtAuthenticationFilter filter;
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//        http.csrf(csrf -> csrf.disable())
//                .authorizeRequests().
//                requestMatchers("/home/**").authenticated()./* .authenticated or .hasRole("ADMIN") */requestMatchers("/auth/login").permitAll()
//                .anyRequest()
//                .authenticated()
//                .and().exceptionHandling(ex -> ex.authenticationEntryPoint(point))
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)); // stateless because we are not storing on server
//        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//        return http.build();
//
//
////        http.
////                authorizeHttpRequests((requests)-> requests
////                        .requestMatchers("/person/login").permitAll()
////                        .requestMatchers("/user/**","/search/user","/user").hasRole("ADMIN")
////                        .anyRequest().authenticated()).csrf().disable();
////
////                http.httpBasic(withDefaults());
////                return http.build();
//
//
//    }
//
//
//}