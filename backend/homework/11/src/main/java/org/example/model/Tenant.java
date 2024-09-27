package org.example.model;



import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@AllArgsConstructor
public class Tenant {

    public Tenant() {

    }

    private UUID id;
    private String name;
    private String createdBy;
    private Timestamp createdAt;
    private String updatedBy;
    private Timestamp updatedAt;


}