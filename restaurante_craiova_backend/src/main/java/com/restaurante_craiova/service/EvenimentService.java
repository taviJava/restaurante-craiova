package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.EvenimentDto;
import com.restaurante_craiova.persistance.model.EvenimentModel;
import com.restaurante_craiova.persistance.model.EvenimentType;
import com.restaurante_craiova.repository.EvenimentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EvenimentService {
    @Autowired
    private EvenimentRepository evenimentRepository;

    public void save(EvenimentDto evenimentDto) {
        EvenimentModel evenimentModel = new EvenimentModel();
        evenimentModel.setId(evenimentDto.getId());
        evenimentModel.setName(evenimentDto.getName());
        evenimentModel.setEmail(evenimentDto.getEmail());
        evenimentModel.setDate(evenimentDto.getDate());
        evenimentModel.setPhone(evenimentDto.getPhone());
        evenimentModel.setTextMessage(evenimentDto.getTextMessage());
        evenimentModel.setNumberOfPersons(evenimentDto.getNumberOfPersons());
        // evenimentModel.setZone(evenimentDto.getZone());
        evenimentRepository.save(evenimentModel);
    }

    public List<EvenimentDto> getAll() {
        List<EvenimentModel> evenimentModelList = evenimentRepository.findAll();
        List<EvenimentDto> evenimentDtoList = new ArrayList<>();
        for (EvenimentModel evenimentModel : evenimentModelList) {
            EvenimentDto evenimentDto = new EvenimentDto();
            evenimentDto.setId(evenimentModel.getId());
            evenimentDto.setName(evenimentModel.getName());
            evenimentDto.setEmail(evenimentModel.getEmail());
            evenimentDto.setDate(evenimentDto.getDate());
            evenimentDto.setNumberOfPersons(evenimentDto.getNumberOfPersons());
            evenimentDto.setPhone(evenimentModel.getPhone());
            evenimentDto.setTextMessage(evenimentModel.getTextMessage());
            evenimentDto.setEvenimentType(evenimentModel.getEvenimentType().name());
            evenimentDto.setZone(evenimentModel.getZone().name());
            evenimentDtoList.add(evenimentDto);
        }
        return evenimentDtoList;
    }

    public EvenimentDto findById(long id) {
        Optional<EvenimentModel> evenimentModelOptional = evenimentRepository.findById(id);
        EvenimentDto evenimentDto = new EvenimentDto();
        if (evenimentModelOptional.isPresent()) {
            EvenimentModel evenimentModel = evenimentModelOptional.get();
            evenimentDto.setId(evenimentModel.getId());
            evenimentDto.setName(evenimentModel.getName());
            evenimentDto.setEmail(evenimentModel.getEmail());
            evenimentDto.setDate(evenimentDto.getDate());
            evenimentDto.setNumberOfPersons(evenimentDto.getNumberOfPersons());
            evenimentDto.setPhone(evenimentModel.getPhone());
            evenimentDto.setTextMessage(evenimentModel.getTextMessage());
            evenimentDto.setEvenimentType(evenimentModel.getEvenimentType().name());
            evenimentDto.setZone(evenimentModel.getZone().name());
        }
        return evenimentDto;
    }

    public void update(EvenimentDto evenimentDto) {
        Optional<EvenimentModel> evenimentModelOptional = evenimentRepository.findById(evenimentDto.getId());
        if (evenimentModelOptional.isPresent()) {
            EvenimentModel evenimentModel = evenimentModelOptional.get();
            evenimentModel.setId(evenimentDto.getId());
            evenimentModel.setName(evenimentDto.getName());
            evenimentModel.setEmail(evenimentDto.getEmail());
            evenimentModel.setDate(evenimentDto.getDate());
            evenimentModel.setPhone(evenimentDto.getPhone());
            evenimentModel.setTextMessage(evenimentDto.getTextMessage());
            evenimentModel.setNumberOfPersons(evenimentDto.getNumberOfPersons());
            evenimentRepository.save(evenimentModel);
        }
    }

    public void delete(long id) {
        evenimentRepository.deleteById(id);
    }
}
