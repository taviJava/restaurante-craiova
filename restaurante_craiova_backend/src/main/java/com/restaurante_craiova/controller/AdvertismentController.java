package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.AdvertisementDto;
import com.restaurante_craiova.service.AdvertismentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@Controller
public class AdvertismentController {
    @Autowired
    AdvertismentService advertismentService;

    @PostMapping("/advertisment")
    public void save(@RequestBody AdvertisementDto advertisementDto) {
        advertismentService.save(advertisementDto);
    }

    @GetMapping("/advertisment")
    public List<AdvertisementDto> getAll() {
        return advertismentService.getAll();
    }

    @GetMapping("/advertisment/{id}")
    public AdvertisementDto getById(@PathVariable(name = "id") long id) {
       return advertismentService.findById(id);
    }
    @PutMapping("/advertisment")
        public void update(@RequestBody AdvertisementDto advertisementDto){
        advertismentService.update(advertisementDto);
    }
    @DeleteMapping("/advertisment/{id}")
    public void delete(@PathVariable(name = "id") long id){
        advertismentService.delete(id);
    }
}
