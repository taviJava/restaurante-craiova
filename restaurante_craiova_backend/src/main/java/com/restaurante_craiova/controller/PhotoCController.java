package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.files.ResponseFile;
import com.restaurante_craiova.persistance.files.ResponseMessage;
import com.restaurante_craiova.persistance.model.ClientModel;
import com.restaurante_craiova.persistance.model.PhotoC;
import com.restaurante_craiova.persistance.model.PizzeriaModel;
import com.restaurante_craiova.persistance.model.RestaurantModel;
import com.restaurante_craiova.repository.LocalRepository;
import com.restaurante_craiova.repository.PizzeriaRepository;
import com.restaurante_craiova.repository.RestaurantRepository;
import com.restaurante_craiova.service.PhotoCService;
import com.restaurante_craiova.service.PizzeriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class PhotoCController {

    @Autowired
    PhotoCService photoCService;
    @Autowired
    private PizzeriaRepository pizzeriaRepository;

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
    @PostMapping("/photospizzeria")
    public ResponseEntity<ResponseMessage> uploadFilePizzeria(@RequestParam("photo") MultipartFile file) {
        String message;
        try {
            photoCService.storePhotosPizzeria(file);
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
    @GetMapping("/pizza/photos/{id}")
    public ResponseEntity<List<ResponseFile>> getPizzeriaFiles(@PathVariable(name = "id") Long id) {
            List<ResponseFile> files = new ArrayList<>();
            Optional<PizzeriaModel> pizzeriaModelOptional = pizzeriaRepository.findById(id);
            if (pizzeriaModelOptional.isPresent()) {
                if (pizzeriaModelOptional.get().getPhotos() != null) {
                    files = photoCService.getPizzeriaphotos(id).map(dbFile -> {
                        String fileDownloadUri = ServletUriComponentsBuilder
                                .fromCurrentContextPath()
                                .path("/photos/pizza/")
                                .path(dbFile.getId())
                                .toUriString();
                        return new ResponseFile(
                                dbFile.getName(),
                                fileDownloadUri,
                                dbFile.getType(),
                                dbFile.getData().length);
                    }).collect(Collectors.toList());

                }
            }
            return ResponseEntity.status(HttpStatus.OK).body(files);
        }


    @GetMapping("/photos/{id}")//restaurant
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        PhotoC photoc = photoCService.getPhoto(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photoc.getName() + "\"")
                .body(photoc.getData());
    }
    @GetMapping("/photos/pizza/{id}")//pizerie, Metoda asta nu se apeleazza in frontend ci se apeleaza de metoda mare de GET( @GetMapping("/pizza/photos/{id}"...getPizzeriaFiles)
    public ResponseEntity<byte[]> getFilePizzeria(@PathVariable String id) {
        PhotoC photoc = photoCService.getPhoto(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photoc.getName() + "\"")
                .body(photoc.getData());
    }
}
