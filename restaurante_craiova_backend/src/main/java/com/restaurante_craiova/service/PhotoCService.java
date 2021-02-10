package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.model.*;
import com.restaurante_craiova.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class PhotoCService {
    @Autowired
    private PizzeriaRepository pizzeriaRepository;
    @Autowired
    private PhotoCRepository photoCRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private ConfectionerRepository confectionerRepository;
    @Autowired
    private AccommodationRepository accommodationRepository;
    @Autowired
    private WeddingBandRepository weddingBandRepository;

    @Autowired
    private LocalRepository localRepository;

    public PhotoC storeWeddingBand(MultipartFile file) throws IOException {
        List<WeddingBandModel> weddingBandModelList = weddingBandRepository.findAll();
        WeddingBandModel weddingBandModel = weddingBandModelList.get(weddingBandModelList.size() - 1);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoc = new PhotoC(fileName, file.getContentType(), file.getBytes());
        photoc.setClientModel(weddingBandModel);

        return photoCRepository.save(photoc);
    }


    public PhotoC storeAccommodation(MultipartFile file) throws IOException {
        List<AccommodationModel> accommodationModelList = accommodationRepository.findAll();
        AccommodationModel accommodationModel = accommodationModelList.get(accommodationModelList.size() - 1);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoc = new PhotoC(fileName, file.getContentType(), file.getBytes());
        photoc.setClientModel(accommodationModel);

        return photoCRepository.save(photoc);
    }

    public PhotoC store(MultipartFile file) throws IOException {
        List<RestaurantModel> restaurantModelList = restaurantRepository.findAll();
        RestaurantModel restaurantModel = restaurantModelList.get(restaurantModelList.size() - 1);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoc = new PhotoC(fileName, file.getContentType(), file.getBytes());
        photoc.setClientModel(restaurantModel);

        return photoCRepository.save(photoc);
    }

    public PhotoC storePhotosPizzeria(MultipartFile file) throws IOException {
        List<PizzeriaModel> pizzeriaModelList = pizzeriaRepository.findAll();
        PizzeriaModel pizzeriaModel = pizzeriaModelList.get(pizzeriaModelList.size() - 1);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoc = new PhotoC(fileName, file.getContentType(), file.getBytes());
        photoc.setClientModel(pizzeriaModel);
        return photoCRepository.save(photoc);
    }

    public PhotoC storeConfectioner(MultipartFile file) throws IOException {
        List<ConfectionerModel> confectionerModelList = confectionerRepository.findAll();
        ConfectionerModel confectionerModel = confectionerModelList.get(confectionerModelList.size() - 1);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoc = new PhotoC(fileName, file.getContentType(), file.getBytes());
        photoc.setClientModel(confectionerModel);

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
    public Stream<PhotoC> getClient(long id) {
        ClientModel clientModel = new ClientModel();
        Optional<ClientModel> pizzeriaModelOptional = localRepository.findById(id);
        if (pizzeriaModelOptional.isPresent()) {
            clientModel = pizzeriaModelOptional.get();
        }
        return clientModel.getPhotos().stream();
    }
    public Stream<PhotoC> getAllConfectionerphotos(long id) {
        ConfectionerModel confectionerModel = new ConfectionerModel();
        Optional<ConfectionerModel> confectionerModelOptional = confectionerRepository.findById(id);
        if (confectionerModelOptional.isPresent()) {
            confectionerModel = confectionerModelOptional.get();
        }
        return confectionerModel.getPhotos().stream();
    }

    public Stream<PhotoC> getAllAccommodationphotos(long id) {
        AccommodationModel accommodationModel = new AccommodationModel();
        Optional<AccommodationModel> accommodationModelOptional = accommodationRepository.findById(id);
        if (accommodationModelOptional.isPresent()) {
            accommodationModel = accommodationModelOptional.get();
        }
        return accommodationModel.getPhotos().stream();
    }
    public Stream<PhotoC> getAllWeddingBandphotos(long id) {
        WeddingBandModel weddingBandModel = new WeddingBandModel();
        Optional<WeddingBandModel> weddingBandModelOptional = weddingBandRepository.findById(id);
        if (weddingBandModelOptional.isPresent()) {
            weddingBandModel = weddingBandModelOptional.get();
        }
        return weddingBandModel.getPhotos().stream();
    }
}


