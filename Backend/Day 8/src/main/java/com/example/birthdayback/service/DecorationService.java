package com.example.birthdayback.service;

import com.example.birthdayback.dto.DecorationDto;
import java.util.List;

public interface DecorationService {

    DecorationDto createDecoration(DecorationDto decorationDto);
    
    DecorationDto getDecorationById(Long decorationId);

    List<DecorationDto> getAllDecorations();

    DecorationDto updateDecoration(Long decorationId, DecorationDto decorationDto);

    void deleteDecoration(Long decorationId);

}
