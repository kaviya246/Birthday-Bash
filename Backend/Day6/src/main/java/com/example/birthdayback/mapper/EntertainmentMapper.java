package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.EntertainmentDto;
import com.example.birthdayback.entity.Entertainment;

public class EntertainmentMapper {
    public static EntertainmentDto mapToEntertainmentDto(Entertainment entertainment)
    {
        return new EntertainmentDto(
            entertainment.getId(),
            entertainment.getName(),
            entertainment.getType(),
            entertainment.getAmount(),
            entertainment.getImageUrl()
        );
    }

    public static Entertainment  mapToEntertainment(EntertainmentDto entertainmentDto)
    {
        return new  Entertainment(
           entertainmentDto.getId(),
           entertainmentDto.getName(),
           entertainmentDto.getType(),
           entertainmentDto.getAmount(),
           entertainmentDto.getImageUrl()
        );
    }
}
