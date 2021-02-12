package com.restaurante_craiova.service;

import com.restaurante_craiova.persistance.model.ClientModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;


@Component
public class SendEmailService {
    @Autowired
    private ClientService clientService;
    @Autowired
    public JavaMailSender mailSender;

    public void sendEmail(long id, String name, String message, String email, int phone) {
        ClientModel clientModel = clientService.getById(id);
        SimpleMailMessage msg = new SimpleMailMessage();

        msg.setTo(clientModel.getMail());

        msg.setSubject("Mesaj nou de la " + name + "");
        msg.setText("" + message + "\n \n Trimis de: " + name + " telefon: " + phone + " \n \n Email: " + email + "");
        mailSender.send(msg);

    }

}
