package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.MessageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository <MessageModel, Long> {

}
