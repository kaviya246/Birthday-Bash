package com.example.birthdayback.service;

import com.example.birthdayback.dto.EntertainmentDto;
import java.util.List;

public interface EntertainmentService {

    EntertainmentDto createEntertainment(EntertainmentDto entertainmentDto);

    EntertainmentDto getEntertainmentById(Long entertainmentId);

    List<EntertainmentDto> getAllEntertainmentServices();

    EntertainmentDto updateEntertainment(Long entertainmentId, EntertainmentDto entertainmentDto);

    void deleteEntertainment(Long EntertainmentId);
}
