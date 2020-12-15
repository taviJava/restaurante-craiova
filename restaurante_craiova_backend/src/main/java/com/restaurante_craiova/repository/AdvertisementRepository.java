package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.AdvertisementModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvertisementRepository extends JpaRepository<AdvertisementModel, Long> {
}
