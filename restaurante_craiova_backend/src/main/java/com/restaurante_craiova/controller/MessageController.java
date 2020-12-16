package com.restaurante_craiova.controller;

import com.restaurante_craiova.persistance.dto.MessageDto;
import com.restaurante_craiova.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MessageController {
    @Autowired
    private MessageService messageService;
    @PostMapping("/message")
    public void save(@RequestBody MessageDto messageDto){
        messageService.save(messageDto);
    }
    @PutMapping("/message")
    public void update(@RequestBody MessageDto messageDto){
        messageService.update(messageDto);
    }
    @GetMapping("/message")
    public List<MessageDto> getAll(){
        return messageService.getAll();
    }
    @GetMapping("/message/{id}")
    public MessageDto getOne(@PathVariable(name = "id") long id){
     return  messageService.getById(id);
    }
    @DeleteMapping("/message/{id}")
    public void delete(@PathVariable(name = "id") long id){
        messageService.delete(id);
    }
}
