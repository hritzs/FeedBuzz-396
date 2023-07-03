package dev.hritik.demo.Space;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SpacesRepo extends MongoRepository<Spaces, ObjectId> {
    Optional<Spaces> findSpacesByImdbId(String imdbId);
}