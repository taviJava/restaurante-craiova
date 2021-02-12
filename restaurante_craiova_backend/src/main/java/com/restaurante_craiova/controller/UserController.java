package com.restaurante_craiova.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.restaurante_craiova.persistance.dto.UserDto;
import com.restaurante_craiova.security.AuthTokenData;
import com.restaurante_craiova.security.TokenProvider;
import com.restaurante_craiova.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.security.sasl.AuthenticationException;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenProvider jwtTokenUtil;

    @PostMapping("/register")
    public void save(@RequestBody UserDto userDto) {
        userService.register(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity generateToken(@RequestBody UserDto userDto) throws AuthenticationException {

        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userDto.getEmail(),
                        userDto.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = jwtTokenUtil.generateToken(authentication);
        System.out.println(token);
        return ResponseEntity.ok(new AuthTokenData(token));
    }

    @GetMapping("/users/{mail}")
    public UserDto getByMail(@PathVariable(name = "mail") String mail) {
        return userService.getByMail(mail);
    }
}
