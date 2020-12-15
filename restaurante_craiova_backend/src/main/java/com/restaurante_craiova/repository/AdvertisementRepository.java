package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.AdvertisementModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdvertisementRepository extends JpaRepository<AdvertisementModel, Long> {
}
