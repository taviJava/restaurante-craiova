package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.ClientModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalRepository extends JpaRepository<ClientModel, Long> {
}
