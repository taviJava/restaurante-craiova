package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.RestaurantDto;
import com.restaurante_craiova.persistance.model.RestaurantModel;
import com.restaurante_craiova.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;

    public void save (RestaurantDto restaurantDto){
        RestaurantModel restaurantModel = new RestaurantModel();
        restaurantRepository.save(getModel(restaurantModel, restaurantDto));
    }

    public void update(RestaurantDto restaurantDto){
        Optional<RestaurantModel> restaurantModelOptional = restaurantRepository.findById(restaurantDto.getId());
        if (restaurantModelOptional.isPresent()){
            RestaurantModel restaurantModel = restaurantModelOptional.get();
            restaurantRepository.save(getModel(restaurantModel, restaurantDto));
        }
    }

    public List<RestaurantDto> getAll(){
        List<RestaurantModel> restaurantModels = restaurantRepository.findAll();
        List<RestaurantDto> restaurantDtos = new ArrayList<>();
        for (RestaurantModel restaurantModel: restaurantModels){
            RestaurantDto restaurantDto = new RestaurantDto();
            restaurantDtos.add(getDto(restaurantModel,restaurantDto));
        }
        return restaurantDtos;
    }

    public RestaurantDto getOne(long id){
        RestaurantDto restaurantDto = new RestaurantDto();
        Optional<RestaurantModel> restaurantModelOptional = restaurantRepository.findById(id);
        if (restaurantModelOptional.isPresent()){
            RestaurantModel restaurantModel = restaurantModelOptional.get();
            getDto(restaurantModel,restaurantDto);
        }
        return restaurantDto;
    }
    public void delete(long id){
        restaurantRepository.deleteById(id);
    }

    private RestaurantDto getDto(RestaurantModel restaurantModel, RestaurantDto restaurantDto){
        restaurantDto.setAddress(restaurantModel.getAddress());
        restaurantDto.setDescription(restaurantModel.getDescription());
        restaurantDto.setMail(restaurantModel.getMail());
        restaurantDto.setName(restaurantModel.getName());
        restaurantDto.setPhone(restaurantModel.getPhone());
        restaurantDto.setWebsite(restaurantModel.getWebsite());
        restaurantDto.setId(restaurantModel.getId());
        restaurantDto.setLatidude(restaurantModel.getLatidude());
        restaurantDto.setLongitude(restaurantModel.getLongitude());
        return restaurantDto;
    }

    private RestaurantModel getModel(RestaurantModel restaurantModel, RestaurantDto restaurantDto){
        restaurantModel.setAddress(restaurantDto.getAddress());
        restaurantModel.setDescription(restaurantDto.getDescription());
        restaurantModel.setMail(restaurantDto.getMail());
        restaurantModel.setName(restaurantDto.getName());
        restaurantModel.setPhone(restaurantDto.getPhone());
        restaurantModel.setWebsite(restaurantDto.getWebsite());
        restaurantModel.setLatidude(restaurantDto.getLatidude());
        restaurantModel.setLongitude(restaurantDto.getLongitude());
        return restaurantModel;
    }
}
