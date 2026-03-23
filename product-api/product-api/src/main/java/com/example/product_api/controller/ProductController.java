package com.example.product_api.controller;



import com.example.product_api.model.Product;
import com.example.product_api.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    // 1. Retrieve all products
    @GetMapping
    public Flux<Product> getAllProducts() {
        return service.getAllProducts();
    }

    // 2. Retrieve product by ID
    @GetMapping("/{id}")
    public Mono<Product> getProductById(@PathVariable String id) {
        return service.getProductById(id);
    }

    // 3. Create product
    @PostMapping
    public Mono<Product> createProduct(@RequestBody Product product) {
        return service.createProduct(product);
    }

    // 4. Update product
    @PutMapping("/{id}")
    public Mono<Product> updateProduct(@PathVariable String id,
                                       @RequestBody Product product) {
        return service.updateProduct(id, product);
    }

    // 5. Delete product
    @DeleteMapping("/{id}")
    public Mono<Void> deleteProduct(@PathVariable String id) {
        return service.deleteProduct(id);
    }

    // 6. Products by price range
    @GetMapping("/price")
    public Flux<Product> getByPriceRange(
            @RequestParam double min,
            @RequestParam double max) {

        return service.getProductsByPriceRange(min, max);
    }
}