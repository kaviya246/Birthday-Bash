package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.birthdayback.entity.Entertainment;

public interface EntertainmentRepository extends JpaRepository<Entertainment,Long> {

}
