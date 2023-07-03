package dev.hritik.demo.Space;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpacesService {

    @Autowired
    private SpacesRepo repo;

    public List<Spaces> findAllSpaces() {
        return repo.findAll();
    }
    public Optional<Spaces> findSpacesByImdbId(String imdbId) {
        return repo.findSpacesByImdbId(imdbId);
    }
}