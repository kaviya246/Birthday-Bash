package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.birthdayback.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food,Long> {

}
