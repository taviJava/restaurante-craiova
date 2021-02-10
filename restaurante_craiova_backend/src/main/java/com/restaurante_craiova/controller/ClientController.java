package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.LocalDto;
import com.restaurante_craiova.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ClientController {
    @Autowired
    private ClientService clientService;
    @GetMapping("/search/{name}")
    public List<LocalDto> search(@PathVariable(name = "name") String name){
        return clientService.search(name, name);
    }
}
