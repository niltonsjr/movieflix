package com.nilton.movieflix.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.nilton.movieflix.dto.ReviewDTO;
import com.nilton.movieflix.services.ReviewService;

@RestController
@RequestMapping(value = "/reviews")
public class ReviewResource {

	@Autowired
	private ReviewService service;

	@PreAuthorize("hasAnyRole('MEMBER')")
	@PostMapping
	public ResponseEntity<ReviewDTO> insert(@Valid @RequestBody ReviewDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@PreAuthorize("hasAnyRole('MEMBER', 'VISITOR')")
	@GetMapping
	public ResponseEntity<List<ReviewDTO>> findAll() {
		List<ReviewDTO> lista = service.findAll();
		return ResponseEntity.ok(lista);
	}

	@PreAuthorize("hasAnyRole('MEMBER', 'VISITOR')")
	@GetMapping(value = "/{id}")
	public ResponseEntity<List<ReviewDTO>> findAllByMovieId(@PathVariable Long id) {
		List<ReviewDTO> lista = service.findByMovieId(id);
		return ResponseEntity.ok(lista);
	}
}
