package com.example.birthdayback.service;

import java.util.List;
import com.example.birthdayback.dto.VenueDto;

public interface VenueService {

    VenueDto createVenue(VenueDto venueDto);
    VenueDto getVenueById(Long VenueId);

    List<VenueDto> getAllVenues();

    VenueDto updateVenue(Long venueId,VenueDto venueDto);

    void deleteVenue(Long venueId);
}
