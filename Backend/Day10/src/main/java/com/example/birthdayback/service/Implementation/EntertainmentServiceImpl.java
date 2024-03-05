package com.example.birthdayback.service.Implementation;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.EntertainmentDto;
import com.example.birthdayback.entity.Entertainment;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.EntertainmentMapper;
import com.example.birthdayback.repository.EntertainmentRepository;
import com.example.birthdayback.service.EntertainmentService;
import java.util.List;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EntertainmentServiceImpl implements EntertainmentService{

    public final EntertainmentRepository entertainmentRepository;

    @Override
    public EntertainmentDto createEntertainment(EntertainmentDto entertainmentDto) {
        Entertainment entertainment = EntertainmentMapper.mapToEntertainment(entertainmentDto);
        Entertainment savedEntertainment = entertainmentRepository.save(entertainment);
        return EntertainmentMapper.mapToEntertainmentDto(savedEntertainment);
    }

    @Override
    public EntertainmentDto getEntertainmentById(Long entertainmentId) {
        Entertainment entertainment = entertainmentRepository.findById(entertainmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Entertainment service not found with id: " + entertainmentId));
        return EntertainmentMapper.mapToEntertainmentDto(entertainment);
    }

    @Override
    public List<EntertainmentDto> getAllEntertainmentServices() {
        List<Entertainment> entertainmentServices = entertainmentRepository.findAll();
        return entertainmentServices.stream().map(EntertainmentMapper::mapToEntertainmentDto).collect(Collectors.toList());
    }

    @Override
    public EntertainmentDto updateEntertainment(Long entertainmentId, EntertainmentDto entertainmentDto) {
        Entertainment existingEntertainment = entertainmentRepository.findById(entertainmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Entertainment service not found with id: " + entertainmentId));
        Entertainment updatedEntertainment = EntertainmentMapper.mapToEntertainment(entertainmentDto);
        updatedEntertainment.setId(existingEntertainment.getId());
        Entertainment savedEntertainment = entertainmentRepository.save(updatedEntertainment);
        return EntertainmentMapper.mapToEntertainmentDto(savedEntertainment);
    }

    @Override
    public void deleteEntertainment(Long entertainmentId) {
        entertainmentRepository.deleteById(entertainmentId);
    }
    
}
