package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.birthdayback.entity.Venue;

public interface VenueRepository extends JpaRepository<Venue, Long> {

}
