package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.birthdayback.entity.Cake;

@Repository
public interface CakeRepository extends JpaRepository<Cake,Long> {

}
