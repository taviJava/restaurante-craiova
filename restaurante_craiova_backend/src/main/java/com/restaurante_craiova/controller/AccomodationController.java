package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.AccommodationDto;
import com.restaurante_craiova.service.AccommodationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
public class AccomodationController {
    @Autowired
    private AccommodationService accommodationService;
    @PostMapping("/accommodation")
    public void save(@RequestBody AccommodationDto accommodationDto){
        accommodationService.save(accommodationDto);
    }
    @PutMapping("/accommodation")
    public void update(@RequestBody AccommodationDto accommodationDto){
        accommodationService.save(accommodationDto);
    }
    @GetMapping("/accommodation")
    public List<AccommodationDto> getAll(){
        return accommodationService.getAll();
    }
    @GetMapping("/accommodation/{id}")
    public AccommodationDto getOne(@PathVariable(name = "id") long id){
        return accommodationService.getOne(id);
    }
    @DeleteMapping("/accommodation/{id}")
    public void delete(@PathVariable(name = "id") long id){
        accommodationService.delete(id);
    }
}
