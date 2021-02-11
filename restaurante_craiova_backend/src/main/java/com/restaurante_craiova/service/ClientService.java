package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.LocalDto;
import com.restaurante_craiova.persistance.model.ClientModel;
import com.restaurante_craiova.repository.LocalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private LocalRepository localRepository;

    public List<LocalDto> search(String name, String name2) {
        List<LocalDto> localDtos = new ArrayList<>();
        List<ClientModel> clientModels = localRepository.findByNameContainingOrDescriptionContaining(name, name2);
        for (ClientModel clientModel : clientModels) {
            localDtos.add(getDto(new LocalDto(), clientModel));
        }
        return localDtos;
    }

    private LocalDto getDto(LocalDto localDto, ClientModel clientModel) {
        localDto.setAddress(clientModel.getAddress());
        localDto.setDescription(clientModel.getDescription());
        localDto.setMail(clientModel.getMail());
        localDto.setName(clientModel.getName());
        localDto.setPhone(clientModel.getPhone());
        localDto.setWebsite(clientModel.getWebsite());
        localDto.setId(clientModel.getId());
        localDto.setLatidude(clientModel.getLatidude());
        localDto.setLongitude(clientModel.getLongitude());
        return localDto;
    }

    public ClientModel getById(long id) {
        Optional<ClientModel> clientModelOptional = localRepository.findById(id);
        ClientModel clientModel =new ClientModel();
        if (clientModelOptional.isPresent()) {
            clientModel = clientModelOptional.get();

        }
        return  clientModel;
    }

}
