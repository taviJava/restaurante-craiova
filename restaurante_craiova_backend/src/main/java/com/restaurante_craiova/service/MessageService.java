package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.dto.MessageDto;
import com.restaurante_craiova.persistance.model.MessageModel;
import com.restaurante_craiova.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private SendEmailService sendEmailService;

    public String sendMessage(MessageDto messageDto,Long localid) {

        int messagesNumberBefore = messageRepository.findAll().size();
        System.out.println(messagesNumberBefore);
        save(messageDto);
        int messageNumberAfter = messageRepository.findAll().size();
        System.out.println(messageNumberAfter);
        if (messageNumberAfter > messagesNumberBefore) {
            sendEmailService.sendEmail(localid, messageDto.getName(), messageDto.getTextMessage(), messageDto.getMail(), messageDto.getPhone());
            return "Mesajul a fost trimis cu succes! \n Mulțumim!";
        } else return "Ne pare rau, mesajul nu s-a transmis";
    }

    public void save(MessageDto messageDto) {
        MessageModel messageModel = new MessageModel();
        messageRepository.save(getModel(messageModel, messageDto));
    }

    public List<MessageDto> getAll() {
        List<MessageModel> messageModelList = messageRepository.findAll();
        List<MessageDto> messageDtoList = new ArrayList<>();
        for (MessageModel messageModel : messageModelList) {
            MessageDto messageDto = new MessageDto();
            messageDtoList.add(getDto(messageDto, messageModel));
        }
        return messageDtoList;
    }

    public MessageDto getById(long id) {
        Optional<MessageModel> messageModelOptional = messageRepository.findById(id);
        MessageDto messageDto = new MessageDto();
        if (messageModelOptional.isPresent()) {
            MessageModel messageModel = messageModelOptional.get();
            getDto(messageDto, messageModel);
        }
        return messageDto;
    }

    public void update(MessageDto messageDto) {
        Optional<MessageModel> messageModelOptional = messageRepository.findById(messageDto.getId());
        if (messageModelOptional.isPresent()) {
            MessageModel messageModel = messageModelOptional.get();
            messageRepository.save(getModel(messageModel, messageDto));
        }
    }

    public void delete(long id) {
        messageRepository.deleteById(id);
    }

    private MessageModel getModel(MessageModel messageModel, MessageDto messageDto) {
        messageModel.setName(messageDto.getName());
        messageModel.setTextMessage(messageDto.getTextMessage());
        return messageModel;
    }

    private MessageDto getDto(MessageDto messageDto, MessageModel messageModel) {
        messageDto.setId(messageModel.getId());
        messageDto.setName(messageModel.getName());
        messageDto.setTextMessage(messageModel.getTextMessage());
        return messageDto;
    }

}
