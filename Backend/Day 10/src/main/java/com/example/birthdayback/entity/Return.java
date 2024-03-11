package com.example.birthdayback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Return {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="name",nullable = false)
    private String name;

    @Column(name="theme",nullable = false)
    private String theme;

    @Column(name="type",nullable = false)
    private String  type;

    @Column(name="amount",nullable = false)
    private double amount;

    
}
