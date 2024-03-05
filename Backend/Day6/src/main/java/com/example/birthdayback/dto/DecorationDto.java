package com.example.birthdayback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class DecorationDto {
    private Long id;
    private String name;
    private String theme;
    private String location;
    private double amount;
    private String imageUrl;
}
