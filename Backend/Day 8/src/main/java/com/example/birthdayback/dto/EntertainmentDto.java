package com.example.birthdayback.dto;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EntertainmentDto {
    private Long id;
    private String name;
    private String type;
    private double amount;
    private String imageUrl;
}
