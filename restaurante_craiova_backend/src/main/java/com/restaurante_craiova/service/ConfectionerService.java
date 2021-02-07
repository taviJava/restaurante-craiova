package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.ConfectionerDto;
import com.restaurante_craiova.persistance.model.ConfectionerModel;
import com.restaurante_craiova.repository.ConfectionerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ConfectionerService {
    @Autowired
    private ConfectionerRepository confectionerRepository;

    public void save(ConfectionerDto confectionerDto) {
        ConfectionerModel confectionerModel = new ConfectionerModel();
        confectionerRepository.save(getModel(confectionerModel, confectionerDto));
    }

    public void update(ConfectionerDto confectionerDto) {
        Optional<ConfectionerModel> confectionerModelOptional = confectionerRepository.findById(confectionerDto.getId());
        if (confectionerModelOptional.isPresent()) {
            ConfectionerModel confectionerModel = confectionerModelOptional.get();
            confectionerRepository.save(getModel(confectionerModel, confectionerDto));
        }
    }

    public List<ConfectionerDto> getAll() {
        List<ConfectionerModel> confectionerModelList = confectionerRepository.findAll();
        List<ConfectionerDto> confectionerDtoList = new ArrayList<>();
        for (ConfectionerModel confectionerModel : confectionerModelList) {
            ConfectionerDto confectionerDto = new ConfectionerDto();
            confectionerDtoList.add(getDto(confectionerDto, confectionerModel));
        }
        return confectionerDtoList;
    }

    public ConfectionerDto getById(long id) {
        Optional<ConfectionerModel> confectionerModelOptional = confectionerRepository.findById(id);
        ConfectionerDto confectionerDto = new ConfectionerDto();
        if (confectionerModelOptional.isPresent()) {
            ConfectionerModel confectionerModel = confectionerModelOptional.get();
            getDto(confectionerDto, confectionerModel);
        }
        return confectionerDto;
    }

    public void delete(long id) {
        confectionerRepository.deleteById(id);
    }

    private ConfectionerDto getDto(ConfectionerDto confectionerDto, ConfectionerModel confectionerModel) {
        confectionerDto.setName(confectionerModel.getName());
        confectionerDto.setDescription(confectionerModel.getDescription());
        confectionerDto.setMail(confectionerModel.getMail());
        confectionerDto.setWebsite(confectionerModel.getWebsite());
        confectionerDto.setAddress(confectionerModel.getAddress());
        confectionerDto.setPhone(confectionerModel.getPhone());
        confectionerDto.setLatidude(confectionerModel.getLatidude());
        confectionerDto.setLongitude(confectionerModel.getLongitude());
        confectionerDto.setId(confectionerModel.getId());
        return confectionerDto;
    }

    private ConfectionerModel getModel(ConfectionerModel confectionerModel, ConfectionerDto confectionerDto) {
        confectionerModel.setName(confectionerDto.getName());
        confectionerModel.setDescription(confectionerDto.getDescription());
        confectionerModel.setMail(confectionerDto.getMail());
        confectionerModel.setWebsite(confectionerDto.getWebsite());
        confectionerModel.setAddress(confectionerDto.getAddress());
        confectionerModel.setPhone(confectionerDto.getPhone());
        confectionerModel.setLatidude(confectionerDto.getLatidude());
        confectionerModel.setLongitude(confectionerDto.getLongitude());
        return confectionerModel;
    }
}
