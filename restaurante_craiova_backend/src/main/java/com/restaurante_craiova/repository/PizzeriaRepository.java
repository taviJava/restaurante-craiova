package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.PizzeriaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;

@Repository
public interface PizzeriaRepository  extends JpaRepository<PizzeriaModel, Long> {
}
