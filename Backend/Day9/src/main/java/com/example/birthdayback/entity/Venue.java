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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="venue")
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "name",nullable = false)
    private String  name;

    @Column(name="amount", nullable=false)
    private  double  amount;

    @Column(name="location", nullable = false)
    private  String location ;

    @Column(name="capacity",nullable = false)
    private int capacity;

    @Column(name="facilities",nullable =false)
    private String  facilities;

    @Column(name="ambiance", nullable = false)
    private  String  ambiance;

    @Column(name="available",nullable = false)
    private boolean available;

    @Column(name="image_url",nullable = false)
    private String  imageUrl;

}
