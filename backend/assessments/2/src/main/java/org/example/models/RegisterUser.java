package org.example.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Data
@Entity
@Table(name="registerUser")
public class RegisterUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID userId;




    private String name;
    private String email;
    private String password;
    private String role;
}






