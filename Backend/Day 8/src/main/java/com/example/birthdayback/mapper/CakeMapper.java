package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.CakeDto;
import com.example.birthdayback.entity.Cake;

public class CakeMapper {
    
    public static CakeDto mapToCakeDto(Cake cake)
    {
        return new  CakeDto(
            cake.getId(),
            cake.getName(),
            cake.getAmount(),
            cake.getFlavour(),
            cake.getTheme(),
            cake.getQuantity(),
            cake.getImageUrl()
        );
    }

    public static Cake mapToCake(CakeDto cakeDto)
    {
        return new Cake(
            cakeDto.getId(),
            cakeDto.getName(),
            cakeDto.getAmount(),
            cakeDto.getFlavour(),
            cakeDto.getTheme(),
            cakeDto.getQuantity(),
            cakeDto.getImageUrl()
        );
    }
}
