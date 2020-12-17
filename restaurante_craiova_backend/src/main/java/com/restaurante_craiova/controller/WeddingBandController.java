package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.RestaurantDto;
import com.restaurante_craiova.persistance.dto.WeddingBandDto;
import com.restaurante_craiova.service.WeddingBandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class WeddingBandController {
    @Autowired
    private WeddingBandService weddingBandService;

    @PostMapping("/wedding")
    public void save(@RequestBody WeddingBandDto weddingBandDto){
        weddingBandService.save(weddingBandDto);
    }
    @PutMapping("/wedding")
    public void update(@RequestBody WeddingBandDto weddingBandDto){
        weddingBandService.update(weddingBandDto);
    }
    @GetMapping("/wedding")
    public List<WeddingBandDto> getAll(){
        return weddingBandService.getAll();
    }
    @GetMapping("/wedding/{id}")
    public WeddingBandDto getOne(@PathVariable(name = "id") long id){
        return weddingBandService.getOne(id);
    }
    @DeleteMapping("/wedding/{id}")
    public void delete(@PathVariable(name = "id") long id){
        weddingBandService.delete(id);
    }
}
