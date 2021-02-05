package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.files.ResponseFile;
import com.restaurante_craiova.persistance.files.ResponseMessage;
import com.restaurante_craiova.persistance.model.ClientModel;
import com.restaurante_craiova.persistance.model.PhotoC;
import com.restaurante_craiova.persistance.model.RestaurantModel;
import com.restaurante_craiova.repository.LocalRepository;
import com.restaurante_craiova.repository.RestaurantRepository;
import com.restaurante_craiova.service.PhotoCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class PhotoCController {
    @Autowired
    private LocalRepository localRepository;
    @Autowired
    PhotoCService photoCService;
    @Autowired
    private RestaurantRepository restaurantRepository;
//    @PostMapping("/photos")
//    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("photo") MultipartFile file) {
//        String message;
//        try {
//            List<ClientModel> clientModelList = localRepository.findAll();
//            ClientModel clientModel = clientModelList.get(clientModelList.size() - 1);
//            System.out.println(file.getName());
//            photoCService.store(file, clientModel.getId());
//
//            message = "Uploaded the file successfully: " + file.getOriginalFilename();
//            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
//        } catch (Exception e) {
//            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
//            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
//        }
//    }

    @PostMapping("/photos/restaurant")
    public ResponseEntity<ResponseMessage> uploadFileRestaurant(@RequestParam("photo") MultipartFile file) {
        String message;
        try {
            photoCService.store(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @GetMapping("/restaurant/photos/{id}")
    public ResponseEntity<List<ResponseFile>> getRestaurantFiles(@PathVariable(name = "id") Long id) {
        List<ResponseFile> files = photoCService.getAllRestaurantphotos(id).map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/photos/")
                    .path(dbFile.getId())
                    .toUriString();
            return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

    @GetMapping("/photos/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        PhotoC photoc = photoCService.getPhoto(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photoc.getName() + "\"")
                .body(photoc.getData());
    }
}
