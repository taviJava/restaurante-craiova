package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.PhotoC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoCRepository extends JpaRepository<PhotoC,String> {
}
