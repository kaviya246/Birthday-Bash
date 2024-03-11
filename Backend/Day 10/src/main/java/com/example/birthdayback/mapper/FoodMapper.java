package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.FoodDto;
import com.example.birthdayback.entity.Food;

public class FoodMapper {
    public static FoodDto mapToFoodDto(Food food)
    {
        return new FoodDto(
            food.getId(),
            food.getName(),
            food.getQuantity(),
            food.getCuisine(),
            food.getAmount(),
            food.getImageUrl()
        );
    }

    public static Food mapToFood(FoodDto foodDto)
    {
        return new Food(
           foodDto.getId(),
           foodDto.getName(),
           foodDto.getCuisine(),
           foodDto.getQuantity(),
           foodDto.getAmount(),
           foodDto.getImageUrl()
        );

    }
}
