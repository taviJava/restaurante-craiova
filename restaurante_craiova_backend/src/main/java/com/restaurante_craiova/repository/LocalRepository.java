package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.LocalModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalRepository extends JpaRepository<LocalModel, Long> {
}
