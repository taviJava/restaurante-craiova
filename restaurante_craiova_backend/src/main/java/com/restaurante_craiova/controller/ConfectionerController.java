package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.ConfectionerDto;
import com.restaurante_craiova.repository.ConfectionerRepository;
import com.restaurante_craiova.service.ConfectionerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ConfectionerController {
    @Autowired
    private ConfectionerService confectionerService;

    @PostMapping("/confectioner")
    public void save(@RequestBody ConfectionerDto confectionerDto) {
        confectionerService.save(confectionerDto);
    }

    @PutMapping("/confectioner")
    public void update(@RequestBody ConfectionerDto confectionerDto) {
        confectionerService.update(confectionerDto);
    }

    @GetMapping("/confectioner")
    public List<ConfectionerDto> getAll() {
        return confectionerService.getAll();
    }

    @GetMapping("/confectioner/{id}")
    public ConfectionerDto getOne(@PathVariable(name = "id") long id) {
        return confectionerService.getById(id);
    }

    @DeleteMapping("/confectioner/{id}")
    public void delete(@PathVariable(name = "id") long id) {
        confectionerService.delete(id);
    }
}
