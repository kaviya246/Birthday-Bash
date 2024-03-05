package com.example.birthdayback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VenueDto {
    private Long id;
    private String name;
    private double amount;
    private String  location;
    private int  capacity;
    private   String facilities;
    private  String ambiance;
    private  boolean available;
    private  String  imageUrl;
}
