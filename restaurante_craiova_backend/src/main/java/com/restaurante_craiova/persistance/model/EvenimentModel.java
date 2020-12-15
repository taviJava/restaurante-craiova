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
    @Enumerated(EnumType.STRING)
    private Zone zone;
    private Date date;
    private int numberOfPersons;
    private String name;
    private String phone;
    private String email;
    private String textMessage;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public EvenimentType getEvenimentType() {
        return evenimentType;
    }

    public void setEvenimentType(EvenimentType evenimentType) {
        this.evenimentType = evenimentType;
    }

    public Zone getZone() {
        return zone;
    }

    public void setZone(Zone zone) {
        this.zone = zone;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getNumberOfPersons() {
        return numberOfPersons;
    }

    public void setNumberOfPersons(int numberOfPersons) {
        this.numberOfPersons = numberOfPersons;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTextMessage() {
        return textMessage;
    }

    public void setTextMessage(String textMessage) {
        this.textMessage = textMessage;
    }
}
