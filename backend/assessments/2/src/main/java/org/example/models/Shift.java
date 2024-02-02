package org.example.models;



import jakarta.persistence.*;
import lombok.Data;


import java.sql.Time;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name="shift")
public class Shift {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;


    private String name;
    private Date startDate;
    private Date endDate;
    private Time startTime;
    private Time endTime;
    private String timeZone;


}