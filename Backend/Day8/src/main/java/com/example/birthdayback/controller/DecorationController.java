package com.example.birthdayback.controller;

import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.birthdayback.dto.DecorationDto;
import com.example.birthdayback.entity.Decoration;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.DecorationMapper;
import com.example.birthdayback.repository.DecorationRepository;
import com.example.birthdayback.service.DecorationService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/entertainment")

public class DecorationController {
    private  DecorationService DecorationService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<DecorationDto> createDecoration(@RequestBody DecorationDto decorationDto) {
        DecorationDto savedDecoration = DecorationService.createDecoration(decorationDto);
        return new ResponseEntity<>(savedDecoration, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DecorationDto> getDecorationById(@PathVariable("id") Long decorationId) {
        DecorationDto decorationDto = DecorationService.getDecorationById(decorationId);
        return ResponseEntity.ok(decorationDto);
    }

    @GetMapping
    public ResponseEntity<List<DecorationDto>> getAllDecoration() {
        List<DecorationDto> Decoration = DecorationService.getAllDecorations();
        return ResponseEntity.ok(Decoration);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<DecorationDto> updateDecoration(@PathVariable("id") Long decorationId, @RequestBody DecorationDto decorationDto) {
        DecorationDto updatedDecoration = DecorationService.updateDecoration(decorationId, decorationDto);
        return ResponseEntity.ok(updatedDecoration);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteDecoration(@PathVariable("id") Long decorationId) {
        DecorationService.deleteDecoration(decorationId);
        return ResponseEntity.noContent().build();
    }
}
