package com.example.birthdayback.service;

import com.example.birthdayback.dto.FoodDto;
import java.util.List;

public interface FoodService {

    FoodDto createFood(FoodDto foodDto);
    FoodDto getFoodById(Long foodId);

    List<FoodDto> getAllFoods();

    FoodDto updateFood(Long foodId,FoodDto foodDto);

    // FoodDto existingFood(Long foodId,FoodDto foodDto);

    void deleteFood(Long foodId);

}
