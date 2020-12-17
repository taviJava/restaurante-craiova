package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.ConfectionerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfectionerRepository extends JpaRepository<ConfectionerModel,Long> {
}
