package org.example.model;



import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
public class Shift {

    public Shift() {

    }

    private String name;
    private Date dateStart;
    private Date dateEnd;
    private Time timeStart;
    private Time timeEnd;
    private UUID id;
    private UUID shiftTypeId;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String timeZone;
    private UUID tenantId;
    private String createdBy;
    private String updatedBy;


}