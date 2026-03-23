package com.gl.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.gl.model.Person;
import com.gl.repository.PersonRepository;

import reactor.core.publisher.Mono;

import static org.springframework.web.reactive.function.server.ServerResponse.*;

@Component
public class PersonHandler {

    private final PersonRepository personRepository;

    public PersonHandler(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    // Get Person By ID
    public Mono<ServerResponse> getPerson(ServerRequest request) {

        String id = request.pathVariable("id");

        return personRepository.findById(id)
                .flatMap(person -> ok().bodyValue(person))
                .switchIfEmpty(notFound().build());
    }

    // Get All Persons
    public Mono<ServerResponse> getAllPersons(ServerRequest request) {

        return ok().body(personRepository.findAll(), Person.class);
    }

    // Create Person
    public Mono<ServerResponse> createPerson(ServerRequest request) {

        return request.bodyToMono(Person.class)
                .flatMap(personRepository::save)
                .flatMap(person -> ok().bodyValue(person));
    }

    // Update Person
    public Mono<ServerResponse> updatePerson(ServerRequest request) {

        String id = request.pathVariable("id");

        return request.bodyToMono(Person.class)
                .flatMap(person -> personRepository.update(id, person)
                        .flatMap(updatedPerson -> ok().bodyValue(updatedPerson))
                        .switchIfEmpty(notFound().build()));
    }

    // Delete Person
    public Mono<ServerResponse> deletePerson(ServerRequest request) {

        String id = request.pathVariable("id");

        return personRepository.delete(id)
                .then(noContent().build());
    }
}