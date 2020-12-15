package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.EvenimentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvenimentRepository extends JpaRepository <EvenimentModel, Long> {
}
