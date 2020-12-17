package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.PizzeriaDto;
import com.restaurante_craiova.service.PizzeriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@Controller
public class PizzeriaController {
    @Autowired
    private PizzeriaService pizzeriaService;

    @PostMapping("/pizzeria")
    public void save(@RequestBody PizzeriaDto pizzeriaDto) {
        pizzeriaService.save(pizzeriaDto);
    }

    @PutMapping("/pizzeria")
    public void update(@RequestBody PizzeriaDto pizzeriaDto) {
        pizzeriaService.save(pizzeriaDto);
    }

    @GetMapping("/pizzeria")
    public List<PizzeriaDto> getAll() {
        return pizzeriaService.getAll();
    }

    @GetMapping("/pizzeria/{id}")
    public PizzeriaDto getById(@PathVariable(name = "id") long id) {
        return pizzeriaService.getOne(id);
    }

    @DeleteMapping("/pizzeria/{id}")
    public void delete(long id) {
        pizzeriaService.delete(id);
    }
}
