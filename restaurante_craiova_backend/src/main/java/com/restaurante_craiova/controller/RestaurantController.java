package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.RestaurantDto;
import com.restaurante_craiova.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/restaurant")
    public void save(@RequestBody RestaurantDto restaurantDto){
        restaurantService.save(restaurantDto);
    }
    @PostMapping("/restaurant")
    public void update(@RequestBody RestaurantDto restaurantDto){
        restaurantService.update(restaurantDto);
    }
    @GetMapping("/restaurant")
    public List<RestaurantDto> getAll(){
        return restaurantService.getAll();
    }
    @GetMapping("/restaurant/{id}")
    public RestaurantDto getOne(@PathVariable(name = "id") long id){
        return restaurantService.getOne(id);
    }
    @DeleteMapping("/restaurant/{id}")
    public void delete(@PathVariable(name = "id") long id){
        restaurantService.delete(id);
    }
}
