package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.VenueDto;
import com.example.birthdayback.entity.Venue;

public class VenueMapper {
    
    public static  VenueDto mapToVeneueDto(Venue venue){
    return  new  VenueDto(
        venue.getId(),
        venue.getName(),
        venue.getAmount(),
        venue.getLocation(),
        venue.getCapacity(),
        venue.getFacilities(),
        venue.getAmbiance(),
        venue.isAvailable(),
        venue.getImageUrl()
    );
}

 public static  Venue mapToVenue(VenueDto venueDto)
 {
    return new Venue(
        venueDto.getId(),
        venueDto.getName(),
       venueDto.getAmount(),
       venueDto.getLocation(),
       venueDto.getCapacity(),
       venueDto.getFacilities(),
       venueDto.getAmbiance(),
       venueDto.isAvailable(),
       venueDto.getImageUrl()
    );
 }
}