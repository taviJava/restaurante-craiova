package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.AdvertisementDto;
import com.restaurante_craiova.persistance.model.AdvertisementModel;
import com.restaurante_craiova.repository.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdvertismentService {
    @Autowired
    AdvertisementRepository advertisementRepository;

    public void save(AdvertisementDto advertisementDto) {
        AdvertisementModel advertisementModel = new AdvertisementModel();
        advertisementRepository.save(getModel(advertisementModel, advertisementDto));
    }

    public List<AdvertisementDto> getAll() {
        List<AdvertisementModel> advertisementModelList = advertisementRepository.findAll();
        List<AdvertisementDto> advertisementDtoList = new ArrayList<>();
        for (AdvertisementModel advertisementModel : advertisementModelList) {
            AdvertisementDto advertisementDto = new AdvertisementDto();
            advertisementDtoList.add(getDto(advertisementDto,advertisementModel));
        }
        return advertisementDtoList;
    }

    public AdvertisementDto findById(long id) {
        Optional<AdvertisementModel> advertisementModelOptional = advertisementRepository.findById(id);
        AdvertisementDto advertisementDto = new AdvertisementDto();
        if (advertisementModelOptional.isPresent()) {
            AdvertisementModel advertisementModel = advertisementModelOptional.get();
            getDto(advertisementDto, advertisementModel);
        }
        return advertisementDto;
    }

    public void update(AdvertisementDto advertisementDto) {
        Optional<AdvertisementModel> advertisementModelOptional = advertisementRepository.findById(advertisementDto.getId());
        if (advertisementModelOptional.isPresent()) {
            AdvertisementModel advertisementModel = advertisementModelOptional.get();
            advertisementRepository.save(getModel(advertisementModel, advertisementDto));
        }
    }

    public void delete(long id) {
        advertisementRepository.deleteById(id);
    }

    private AdvertisementModel getModel(AdvertisementModel advertisementModel, AdvertisementDto advertisementDto) {
        advertisementModel.setFirstName(advertisementDto.getFirstName());
        advertisementModel.setLastName(advertisementDto.getLastName());
        advertisementModel.setMail(advertisementDto.getMail());
        advertisementModel.setPhone(advertisementDto.getPhone());
        advertisementModel.setTextMessage(advertisementDto.getTextMessage());
        return advertisementModel;
    }

    private AdvertisementDto getDto(AdvertisementDto advertisementDto, AdvertisementModel advertisementModel) {
        advertisementDto.setFirstName(advertisementModel.getFirstName());
        advertisementDto.setLastName(advertisementModel.getLastName());
        advertisementDto.setMail(advertisementModel.getMail());
        advertisementDto.setPhone(advertisementModel.getPhone());
        advertisementDto.setTextMessage(advertisementModel.getTextMessage());
        advertisementDto.setId(advertisementModel.getId());
        return advertisementDto;
    }
}
