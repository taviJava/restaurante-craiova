package com.restaurante_craiova.repository;

import com.restaurante_craiova.persistance.model.RestaurantModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<RestaurantModel,Long> {
}
