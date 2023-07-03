package dev.hritik.demo.Space;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/spaces")
public class SpacesController {

    @Autowired
    private SpacesService service;

    @GetMapping
    public ResponseEntity<List<Spaces>> getSpaces() {
        return new ResponseEntity<List<Spaces>>(service.findAllSpaces(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Spaces>> getSingleSpaces(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Spaces>>(service.findSpacesByImdbId(imdbId), HttpStatus.OK);
    }
}