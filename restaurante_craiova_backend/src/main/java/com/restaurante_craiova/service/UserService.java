package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.UserDto;
import com.restaurante_craiova.persistance.model.UserModel;
import com.restaurante_craiova.repository.UserRepository;
import com.restaurante_craiova.security.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService extends UserDetailService {
    @Autowired
    private UserRepository userRepository;

    public UserDto getByMail(String mail) {
        Optional<UserModel> userModelOptional = userRepository.findByEmail(mail);
        UserDto userDto = new UserDto();
        if (userModelOptional.isPresent()) {
            UserModel userModel = userModelOptional.get();
            userDto.setId(userModel.getId());
            userDto.setEmail(userModel.getEmail());
            userDto.setPassword(userModel.getPassword());
            userDto.setRole(userModel.getRole().name());
        }
        return userDto;
    }
}
