package org.example.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "user")
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String username;
    private String timeZone;
    private int loggedIn;
    @ManyToOne
    @JoinColumn(name = "tenant_id")
    private Tenant tenant;
}