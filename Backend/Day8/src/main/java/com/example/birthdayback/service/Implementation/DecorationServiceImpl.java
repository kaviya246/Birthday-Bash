package com.example.birthdayback.service.Implementation;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.DecorationDto;
import com.example.birthdayback.entity.Decoration;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.DecorationMapper;
import com.example.birthdayback.repository.DecorationRepository;
import com.example.birthdayback.service.DecorationService;
import java.util.List;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DecorationServiceImpl implements DecorationService{
 
    private final DecorationRepository decorationRepository;

    @Override
    public DecorationDto createDecoration(DecorationDto decorationDto) {
        Decoration decoration = DecorationMapper.mapToDecoration(decorationDto);
        Decoration savedDecoration = decorationRepository.save(decoration);
        return DecorationMapper.mapToDecorationDto(savedDecoration);
    }

    @Override
    public DecorationDto getDecorationById(Long decorationId) {
        Decoration decoration = decorationRepository.findById(decorationId)
                .orElseThrow(() -> new ResourceNotFoundException("Decoration not found with id: " + decorationId));
        return DecorationMapper.mapToDecorationDto(decoration);
    }

    @Override
    public List<DecorationDto> getAllDecorations() {
        List<Decoration> Decoration = decorationRepository.findAll();
        return Decoration.stream().map(DecorationMapper::mapToDecorationDto).collect(Collectors.toList());
    }

    @Override
    public DecorationDto updateDecoration(Long decorationId, DecorationDto decorationDto) {
        Decoration existingDecoration = decorationRepository.findById(decorationId)
                .orElseThrow(() -> new ResourceNotFoundException("Decoration not found with id: " + decorationId));
        Decoration updatedDecoration = DecorationMapper.mapToDecoration(decorationDto);
        updatedDecoration.setId(existingDecoration.getId());
        Decoration savedDecoration = decorationRepository.save(updatedDecoration);
        return DecorationMapper.mapToDecorationDto(savedDecoration);
    }

    @Override
    public void deleteDecoration(Long decorationId) {
        decorationRepository.deleteById(decorationId);
    }
}
