package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.PizzeriaDto;
import com.restaurante_craiova.persistance.model.PizzeriaModel;
import com.restaurante_craiova.repository.PizzeriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PizzeriaService {
    @Autowired
    private PizzeriaRepository pizzeriaRepository;


    public void save(PizzeriaDto pizzeriaDto) {
        PizzeriaModel pizzeriaModel = new PizzeriaModel();
        pizzeriaRepository.save(getModel(pizzeriaModel, pizzeriaDto));
    }

    public void update(PizzeriaDto pizzeriaDto) {
        Optional<PizzeriaModel> pizzeriaModelOptional = pizzeriaRepository.findById(pizzeriaDto.getId());
        if (pizzeriaModelOptional.isPresent()) {
            PizzeriaModel pizzeriaModel = pizzeriaModelOptional.get();
            pizzeriaRepository.save(getModel(pizzeriaModel, pizzeriaDto));
        }
    }

    public List<PizzeriaDto> getAll() {
        List<PizzeriaModel> pizzeriaModels = pizzeriaRepository.findAll();
        List<PizzeriaDto> pizzeriaDtos = new ArrayList<>();
        for (PizzeriaModel restaurantModel : pizzeriaModels) {
            PizzeriaDto pizzeriaDto = new PizzeriaDto();
            pizzeriaDtos.add(getDto(restaurantModel, pizzeriaDto));
        }
        return pizzeriaDtos;
    }

    public PizzeriaDto getOne(long id) {
        PizzeriaDto pizzeriaDto = new PizzeriaDto();
        Optional<PizzeriaModel> pizzeriaModelOptional = pizzeriaRepository.findById(id);
        if (pizzeriaModelOptional.isPresent()) {
            PizzeriaModel restaurantModel = pizzeriaModelOptional.get();
            getDto(restaurantModel, pizzeriaDto);
        }
        return pizzeriaDto;
    }

    public void delete(long id) {
        pizzeriaRepository.deleteById(id);
    }

    private PizzeriaDto getDto(PizzeriaModel pizzeriaModel, PizzeriaDto pizzeriaDto) {
        pizzeriaDto.setAddress(pizzeriaModel.getAddress());
        pizzeriaDto.setDescription(pizzeriaModel.getDescription());
        pizzeriaDto.setMail(pizzeriaModel.getMail());
        pizzeriaDto.setName(pizzeriaModel.getName());
        pizzeriaDto.setPhone(pizzeriaModel.getPhone());
        pizzeriaDto.setWebsite(pizzeriaModel.getWebsite());
        pizzeriaDto.setId(pizzeriaModel.getId());
        return pizzeriaDto;
    }

    private PizzeriaModel getModel(PizzeriaModel pizzeriaModel, PizzeriaDto pizzeriaDto) {
        pizzeriaModel.setAddress(pizzeriaDto.getAddress());
        pizzeriaModel.setDescription(pizzeriaDto.getDescription());
        pizzeriaModel.setMail(pizzeriaDto.getMail());
        pizzeriaModel.setName(pizzeriaDto.getName());
        pizzeriaModel.setPhone(pizzeriaDto.getPhone());
        pizzeriaModel.setWebsite(pizzeriaDto.getWebsite());
        return pizzeriaModel;
    }
}

