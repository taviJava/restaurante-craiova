package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.WeddingBandDto;
import com.restaurante_craiova.persistance.model.WeddingBandModel;
import com.restaurante_craiova.repository.WeddingBandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WeddingBandService {
    @Autowired
    WeddingBandRepository weddingBandRepository;

    public void save(WeddingBandDto weddingBandDto) {
        WeddingBandModel weddingBandModel = new WeddingBandModel();
        weddingBandRepository.save(getModel(weddingBandDto, weddingBandModel));
    }

    public void update(WeddingBandDto weddingBandDto) {
        Optional<WeddingBandModel> weddingBandModelOptional = weddingBandRepository.findById(weddingBandDto.getId());
        if (weddingBandModelOptional.isPresent()) {
            WeddingBandModel weddingBandModel = weddingBandModelOptional.get();
            weddingBandRepository.save(getModel(weddingBandDto, weddingBandModel));
        }
    }

    public List<WeddingBandDto> getAll() {
        List<WeddingBandModel> weddingBandModelList = weddingBandRepository.findAll();
        List<WeddingBandDto> weddingBandDtoList = new ArrayList<>();
        for (WeddingBandModel weddingBandModel : weddingBandModelList) {
            WeddingBandDto weddingBandDto = new WeddingBandDto();
            weddingBandDtoList.add(getDto(weddingBandDto, weddingBandModel));

        }
        return weddingBandDtoList;
    }

    public WeddingBandDto getOne(long id){
        Optional<WeddingBandModel> weddingBandModelOptional = weddingBandRepository.findById(id);
        WeddingBandDto weddingBandDto = new WeddingBandDto();
        if (weddingBandModelOptional.isPresent()){
            WeddingBandModel weddingBandModel = weddingBandModelOptional.get();
            getDto(weddingBandDto,weddingBandModel);
        }
        return weddingBandDto;
    }

    public void delete(long id){
        weddingBandRepository.deleteById(id);
    }

    private WeddingBandDto getDto(WeddingBandDto weddingBandDto, WeddingBandModel weddingBandModel) {
        weddingBandDto.setId(weddingBandModel.getId());
        weddingBandDto.setName(weddingBandModel.getName());
        weddingBandDto.setDescription(weddingBandModel.getDescription());
        weddingBandDto.setMail(weddingBandModel.getMail());
        weddingBandDto.setPhone(weddingBandModel.getPhone());
        weddingBandDto.setWebsite(weddingBandModel.getWebsite());
        weddingBandDto.setAddress(weddingBandModel.getAddress());

        return weddingBandDto;

    }

    private WeddingBandModel getModel(WeddingBandDto weddingBandDto, WeddingBandModel weddingBandModel) {
        weddingBandModel.setName(weddingBandDto.getName());
        weddingBandModel.setDescription(weddingBandDto.getDescription());
        weddingBandModel.setMail(weddingBandDto.getMail());
        weddingBandModel.setPhone(weddingBandDto.getPhone());
        weddingBandModel.setWebsite(weddingBandDto.getWebsite());
        weddingBandModel.setAddress(weddingBandDto.getAddress());
        return weddingBandModel;

    }
}
