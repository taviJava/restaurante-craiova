package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.WeddingBandModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeddingBandRepository  extends JpaRepository<WeddingBandModel,Long> {
}
