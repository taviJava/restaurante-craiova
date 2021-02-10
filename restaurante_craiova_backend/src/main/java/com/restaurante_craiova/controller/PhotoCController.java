package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.files.ResponseFile;
import com.restaurante_craiova.persistance.files.ResponseMessage;
import com.restaurante_craiova.persistance.model.*;
import com.restaurante_craiova.repository.*;
import com.restaurante_craiova.service.PhotoCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private PhotoCService photoCService;
    @Autowired
    private PizzeriaRepository pizzeriaRepository;
    @Autowired
    private ConfectionerRepository confectionerRepository;
    @Autowired
    private AccommodationRepository accommodationRepository;
    @Autowired
    private WeddingBandRepository weddingBandRepository;
    @Autowired
    private LocalRepository localRepository;
    @PostMapping("/photos/weddingBand")
    public ResponseEntity<ResponseMessage> uploadFileWeddingBand(@RequestParam("photo") MultipartFile file) {
        String message;
        try {
            photoCService.storeWeddingBand(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @PostMapping("/photos/accommodation")
    public ResponseEntity<ResponseMessage> uploadFileAccommodation(@RequestParam("photo") MultipartFile file) {
        String message;
        try {
            photoCService.storeAccommodation(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

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

    @PostMapping("/photosconfectioner")
    public ResponseEntity<ResponseMessage> uploadFileConfectioner(@RequestParam("photo") MultipartFile file) {
        String message;
        try {
            photoCService.storeConfectioner(file);
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

    @GetMapping("/confectioner/photos/{id}")
    public ResponseEntity<List<ResponseFile>> getConfectionerFiles(@PathVariable(name = "id") Long id) {
        List<ResponseFile> files = new ArrayList<>();
        Optional<ConfectionerModel> confectionerModelOptional = confectionerRepository.findById(id);
        if (confectionerModelOptional.isPresent()) {
            if (confectionerModelOptional.get().getPhotos() != null) {
                files = photoCService.getAllConfectionerphotos(id).map(dbFile -> {
                    String fileDownloadUri = ServletUriComponentsBuilder
                            .fromCurrentContextPath()
                            .path("/photos/confectioner/")
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

    @GetMapping("/accommodation/photos/{id}")
    public ResponseEntity<List<ResponseFile>> getAccommodationFiles(@PathVariable(name = "id") Long id) {
        List<ResponseFile> files = new ArrayList<>();
        Optional<AccommodationModel> accommodationModelOptional = accommodationRepository.findById(id);
        if (accommodationModelOptional.isPresent()) {
            if (accommodationModelOptional.get().getPhotos() != null) {
                files = photoCService.getAllAccommodationphotos(id).map(dbFile -> {
                    String fileDownloadUri = ServletUriComponentsBuilder
                            .fromCurrentContextPath()
                            .path("/photos/accommodation/")
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
    @GetMapping("/weddingBand/photos/{id}")
    public ResponseEntity<List<ResponseFile>> getWeddingBandFiles(@PathVariable(name = "id") Long id) {
        List<ResponseFile> files = new ArrayList<>();
        Optional<WeddingBandModel> weddingBandModelOptional = weddingBandRepository.findById(id);
        if (weddingBandModelOptional.isPresent()) {
            if (weddingBandModelOptional.get().getPhotos() != null) {
                files = photoCService.getAllWeddingBandphotos(id).map(dbFile -> {
                    String fileDownloadUri = ServletUriComponentsBuilder
                            .fromCurrentContextPath()
                            .path("/photos/weddingBand/")
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
    @GetMapping("/search/photos/{id}")
    public ResponseEntity<List<ResponseFile>> getClientFiles(@PathVariable(name = "id") Long id) {
        List<ResponseFile> files = new ArrayList<>();
        Optional<ClientModel> clientModelOptional = localRepository.findById(id);
        if (clientModelOptional.isPresent()) {
            if (clientModelOptional.get().getPhotos() != null) {
                files = photoCService.getClient(id).map(dbFile -> {
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

    @GetMapping("/photos/pizza/{id}")
//pizzerie, Metoda asta nu se apeleaza in frontend ci se apeleaza de metoda mare de GET( @GetMapping("/pizza/photos/{id}"...getPizzeriaFiles)
    public ResponseEntity<byte[]> getFilePizzeria(@PathVariable String id) {
        PhotoC photoc = photoCService.getPhoto(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photoc.getName() + "\"")
                .body(photoc.getData());
    }

    @GetMapping("/photos/confectioner/{id}")
    public ResponseEntity<byte[]> getFileConfectioner(@PathVariable String id) {
        PhotoC photoc = photoCService.getPhoto(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photoc.getName() + "\"")
                .body(photoc.getData());
    }

    @GetMapping("/photos/accommodation/{id}")
    public ResponseEntity<byte[]> getFileAccommodation(@PathVariable String id) {
        PhotoC photoc = photoCService.getPhoto(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photoc.getName() + "\"")
                .body(photoc.getData());
    }
    @GetMapping("/photos/weddingBand/{id}")
    public ResponseEntity<byte[]> getFileWeddingBand(@PathVariable String id) {
        PhotoC photoc = photoCService.getPhoto(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photoc.getName() + "\"")
                .body(photoc.getData());
    }
}
