package com.example.product_api.repository;

import com.example.product_api.model.Product;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

    Flux<Product> findByPriceBetween(double min, double max);

}