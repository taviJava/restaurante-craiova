package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.model.ClientModel;
import com.restaurante_craiova.persistance.model.PhotoC;
import com.restaurante_craiova.persistance.model.PizzeriaModel;
import com.restaurante_craiova.persistance.model.RestaurantModel;
import com.restaurante_craiova.repository.LocalRepository;
import com.restaurante_craiova.repository.PhotoCRepository;
import com.restaurante_craiova.repository.PizzeriaRepository;
import com.restaurante_craiova.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

@Service
public class PhotoCService {
    @Autowired
    private PizzeriaRepository pizzeriaRepository;
    @Autowired
    private PhotoCRepository photoCRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;

    public PhotoC store(MultipartFile file) throws IOException {
        List<RestaurantModel> restaurantModelList = (List<RestaurantModel>) restaurantRepository.findAll();
        RestaurantModel restaurantModel = restaurantModelList.get(restaurantModelList.size() - 1);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoc = new PhotoC(fileName, file.getContentType(), file.getBytes());
        photoc.setClientModel(restaurantModel);

        return photoCRepository.save(photoc);
    }
    public PhotoC storePhotosPizzeria(MultipartFile file) throws IOException {
        List<PizzeriaModel> pizzeriaModelList =  pizzeriaRepository.findAll();
        PizzeriaModel pizzeriaModel = pizzeriaModelList.get(pizzeriaModelList.size() - 1);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoc = new PhotoC(fileName, file.getContentType(), file.getBytes());
        photoc.setClientModel(pizzeriaModel);
        return photoCRepository.save(photoc);
    }

    public PhotoC getPhoto(String id) {
        return photoCRepository.findById(id).get();
    }

    public Stream<PhotoC> getAllRestaurantphotos(long id) {
        RestaurantModel restaurantModel = new RestaurantModel();
        Optional<RestaurantModel> restaurantModelOptional = restaurantRepository.findById(id);
        if (restaurantModelOptional.isPresent()) {
            restaurantModel = restaurantModelOptional.get();
        }
        return restaurantModel.getPhotos().stream();
    }
    public Stream<PhotoC> getPizzeriaphotos(long id) {
        PizzeriaModel pizzeriaModel = new PizzeriaModel();
        Optional<PizzeriaModel> pizzeriaModelOptional = pizzeriaRepository.findById(id);
        if (pizzeriaModelOptional.isPresent()) {
            pizzeriaModel = pizzeriaModelOptional.get();
        }
        return pizzeriaModel.getPhotos().stream();
    }
}


