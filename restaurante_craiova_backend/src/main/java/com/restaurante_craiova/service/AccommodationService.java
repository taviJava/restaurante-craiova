package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.AccommodationDto;
import com.restaurante_craiova.persistance.model.AccommodationModel;
import com.restaurante_craiova.repository.AccommodationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AccommodationService {
    @Autowired
    AccommodationRepository accommodationRepository;

    public void save(AccommodationDto accommodationDto) {
        AccommodationModel accommodationModel = new AccommodationModel();
        accommodationRepository.save(getModel(accommodationDto, accommodationModel));
    }

    public void update(AccommodationDto accommodationDto) {
        Optional<AccommodationModel> accommodationModelOptional = accommodationRepository.findById(accommodationDto.getId());
        if (accommodationModelOptional.isPresent()) {
            AccommodationModel accommodationModel = accommodationModelOptional.get();
           accommodationRepository.save(getModel(accommodationDto, accommodationModel));
        }
    }
    public List<AccommodationDto> getAll(){
     List<AccommodationModel> accommodationModels = accommodationRepository.findAll();
     List<AccommodationDto> accommodationDtos = new ArrayList<>();
     for (AccommodationModel accommodationModel: accommodationModels){
         accommodationDtos.add(getDto(new AccommodationDto(), accommodationModel));
     }
     return accommodationDtos;
    }

    public AccommodationDto getOne(long id){
        Optional<AccommodationModel> accommodationModelOptional = accommodationRepository.findById(id);
        AccommodationDto accommodationDto = new AccommodationDto();
        if (accommodationModelOptional.isPresent()){
            AccommodationModel accommodationModel = accommodationModelOptional.get();
            getDto(accommodationDto,accommodationModel);
        }
        return accommodationDto;
    }

    public void delete(long id){
        accommodationRepository.deleteById(id);
    }

    private AccommodationDto getDto(AccommodationDto accommodationDto, AccommodationModel accommodationModel) {
        accommodationDto.setId(accommodationModel.getId());
        accommodationDto.setName(accommodationModel.getName());
        accommodationDto.setDescription(accommodationModel.getDescription());
        accommodationDto.setMail(accommodationModel.getMail());
        accommodationDto.setWebsite(accommodationModel.getWebsite());
        accommodationDto.setAddress(accommodationModel.getAddress());
        accommodationDto.setPhone(accommodationModel.getPhone());
        return accommodationDto;
    }

    private AccommodationModel getModel(AccommodationDto accommodationDto, AccommodationModel accommodationModel) {
        accommodationModel.setId(accommodationDto.getId());
        accommodationModel.setName(accommodationDto.getName());
        accommodationModel.setDescription(accommodationDto.getDescription());
        accommodationModel.setMail(accommodationDto.getMail());
        accommodationModel.setWebsite(accommodationDto.getWebsite());
        accommodationModel.setAddress(accommodationDto.getAddress());
        accommodationModel.setPhone(accommodationDto.getPhone());
        return accommodationModel;
    }
}
