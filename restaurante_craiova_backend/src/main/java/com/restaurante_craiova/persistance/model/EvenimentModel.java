package com.restaurante_craiova.persistance.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class EvenimentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Enumerated(EnumType.STRING)
    private EvenimentType evenimentType;
    private Date date;
    private int numberOfPersons;
    private String name;
    private String phone;
    private String email;
    private String textMessage;
}
