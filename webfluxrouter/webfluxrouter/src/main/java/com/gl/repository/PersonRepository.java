package com.gl.repository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gl.model.Person;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public class PersonRepository {

    private final Map<String, Person> personMap = new HashMap<>();

    // Find Person By ID
    public Mono<Person> findById(String id) {

        return Mono.justOrEmpty(personMap.get(id));
    }

    // Find All Persons
    public Flux<Person> findAll() {

        return Flux.fromIterable(personMap.values());
    }

    // Save Person
    public Mono<Person> save(Person person) {

        personMap.put(person.getId(), person);
        return Mono.just(person);
    }

    // Update Person
    public Mono<Person> update(String id, Person person) {

        if (personMap.containsKey(id)) {

            person.setId(id);
            personMap.put(id, person);

            return Mono.just(person);
        }

        return Mono.empty();
    }

    // Delete Person
    public Mono<Void> delete(String id) {

        personMap.remove(id);

        return Mono.empty();
    }
}