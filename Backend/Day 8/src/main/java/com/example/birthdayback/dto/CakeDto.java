package com.example.birthdayback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CakeDto {
    private Long id;
    private String name;
    private double amount;
    private String  flavour;
    private String  theme;
    private String quantity;
    private String  imageUrl;
}
