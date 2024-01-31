package org.example.model;



import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@AllArgsConstructor
public class ShiftType {

    public ShiftType() {

    }

    private boolean active;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String timeZone;
    private UUID tenantId;
    private UUID id;
    private String uqName;
    private String description;
    private String createdBy;
    private String updatedBy;


}