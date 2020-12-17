package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.EvenimentDto;
import com.restaurante_craiova.service.EvenimentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@Controller
public class EvenimentController {
    @Autowired
    private EvenimentService evenimentService;

    @PostMapping("/eveniment")
    public void save(@RequestBody EvenimentDto evenimentDto) {
        evenimentService.save(evenimentDto);
    }

    @GetMapping("/eveniment")
    public List<EvenimentDto> getAll() {
        return evenimentService.getAll();
    }

    @GetMapping("/eveniment/{id}")
    public EvenimentDto getById(@PathVariable(name = "id") long id) {
        return evenimentService.findById(id);
    }

    @PutMapping("/eveniment")
    public void update(@RequestBody EvenimentDto evenimentDto) {
        evenimentService.update(evenimentDto);
    }

    @DeleteMapping("/eveniment/{id}")
    public void delete(@PathVariable(name = "id") long id) {
        evenimentService.delete(id);
    }
}
