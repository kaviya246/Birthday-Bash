package com.example.birthdayback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="cakes")
public class Cake {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name",nullable = false)
    private String name;

    @Column(name="amount",nullable = false)
    private double amount;

    @Column(name="flavour",nullable = false)
    private String flavour;

    @Column(name="theme",nullable = false)
    private String  theme;

    @Column(name="quantity",nullable =false)
    private String quantity;

    @Column(name="image_url",nullable = false)
    private  String imageUrl;
}
