package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.AccommodationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccommodationRepository  extends JpaRepository<AccommodationModel,Long> {
}
