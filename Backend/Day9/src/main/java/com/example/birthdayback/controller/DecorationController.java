package com.example.birthdayback.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.birthdayback.dto.DecorationDto;
import com.example.birthdayback.service.DecorationService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/decoration")
public class DecorationController {

    private DecorationService decorationService;

     @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<DecorationDto> createDecoration(@RequestBody DecorationDto decorationDto) {
        DecorationDto savedDecoration = decorationService.createDecoration(decorationDto);
        return new ResponseEntity<>(savedDecoration, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DecorationDto> getDecorationById(@PathVariable("id") Long decorationId) {
        DecorationDto decorationDto = decorationService.getDecorationById(decorationId);
        return ResponseEntity.ok(decorationDto);
    }

    @GetMapping
    public ResponseEntity<List<DecorationDto>> getAllDecorations() {
        List<DecorationDto> decorations = decorationService.getAllDecorations();
        return ResponseEntity.ok(decorations);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<DecorationDto> updateDecoration(@PathVariable("id") Long decorationId, @RequestBody DecorationDto decorationDto) {
        DecorationDto updatedDecoration = decorationService.updateDecoration(decorationId, decorationDto);
        return ResponseEntity.ok(updatedDecoration);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteDecoration(@PathVariable("id") Long decorationId) {
        decorationService.deleteDecoration(decorationId);
        return ResponseEntity.noContent().build();
    }
}
