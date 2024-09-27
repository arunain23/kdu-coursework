package org.example.model;



import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@AllArgsConstructor
public class shiftUser {

    public shiftUser() {

    }

    private UUID id;
    private UUID shiftId;
    private UUID userId;
    private UUID tenantId;
    private String createdBy;
    private String updatedBy;
    private Timestamp createdAt;
    private Timestamp updatedAt;


}