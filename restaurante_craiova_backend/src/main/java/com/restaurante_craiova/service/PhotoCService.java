package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.model.ClientModel;
import com.restaurante_craiova.persistance.model.PhotoC;
import com.restaurante_craiova.repository.LocalRepository;
import com.restaurante_craiova.repository.PhotoCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

@Service
public class PhotoCService {
    @Autowired
    private LocalRepository localRepository;
    @Autowired
    private PhotoCRepository photoCRepository;

    public PhotoC store(MultipartFile file, long id) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        PhotoC photoC = new PhotoC(fileName, file.getContentType(), file.getBytes());
        ClientModel clientModel = localRepository.findById(id).get();
        photoC.setClientModel(clientModel);
        return photoCRepository.save(photoC);
    }
    public PhotoC getPhoto(String id) {
        return photoCRepository.findById(id).get();
    }

    public Stream<PhotoC> getAllphotos() {
        return photoCRepository.findAll().stream();
    }

    public Stream<PhotoC> getAllClientphotos(ClientModel clientModel)
    {
        return clientModel.getPhotos().stream();
    }
}
