package com.supplytracker.system.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Users {
    @Id
    private Long id;
    private String username;
    private String password;
}