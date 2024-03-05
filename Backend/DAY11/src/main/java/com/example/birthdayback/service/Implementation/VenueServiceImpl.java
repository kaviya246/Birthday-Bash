package com.example.birthdayback.service.Implementation;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import java.util.List;
import com.example.birthdayback.dto.VenueDto;
import com.example.birthdayback.entity.Venue;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.VenueMapper;
import com.example.birthdayback.repository.VenueRepository;
import com.example.birthdayback.service.VenueService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class VenueServiceImpl implements VenueService {
    
    private final VenueRepository venueRepository;

    @Override
    public VenueDto createVenue(VenueDto venueDto) {
        Venue venue = VenueMapper.mapToVenue(venueDto);
        Venue savedVenue = venueRepository.save(venue);
        return VenueMapper.mapToVeneueDto(savedVenue);
    }

    @Override
    public VenueDto getVenueById(Long venueId) {
        Venue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new ResourceNotFoundException("Venue not found with id: " + venueId));
        return VenueMapper.mapToVeneueDto(venue);
    }

    @Override
    public List<VenueDto> getAllVenues() {
        List<Venue> venues = venueRepository.findAll();
        return venues.stream().map(VenueMapper::mapToVeneueDto).collect(Collectors.toList());
    }

    @Override
    public VenueDto updateVenue(Long venueId,VenueDto  venueDto) {
        Venue existingVenue = venueRepository.findById(venueId)
                .orElseThrow(() -> new ResourceNotFoundException("Venue not found with id: " + venueId));
        Venue updatedVenue = VenueMapper.mapToVenue(venueDto);
        updatedVenue.setId(existingVenue.getId());
        Venue savedVenue = venueRepository.save(updatedVenue);
        return VenueMapper.mapToVeneueDto(savedVenue);
    }

    @Override
    public void deleteVenue(Long venueId) {
        venueRepository.deleteById(venueId);
    }
}
