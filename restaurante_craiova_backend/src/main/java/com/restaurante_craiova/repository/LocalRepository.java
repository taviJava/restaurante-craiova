package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.ClientModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocalRepository extends JpaRepository<ClientModel, Long> {
    List<ClientModel> findByNameContainingOrDescriptionContaining(String name, String name2);
}
