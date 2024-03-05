package com.example.birthdayback.service;

import com.example.birthdayback.dto.CakeDto;
import java.util.List;

public interface CakeService {

    CakeDto createCake(CakeDto cakeDto);

    CakeDto getCakeById(Long cakeId);

    List<CakeDto> getAllCakes();

    CakeDto updateCake(Long cakeId,CakeDto cakeDto);

    void deleteCake(Long cakeId);

}
