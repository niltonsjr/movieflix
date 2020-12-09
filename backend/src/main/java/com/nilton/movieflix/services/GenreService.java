package com.nilton.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nilton.movieflix.dto.GenreDTO;
import com.nilton.movieflix.entities.Genre;
import com.nilton.movieflix.repositories.GenreRepository;
import com.nilton.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;

	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		List<Genre> lista = repository.findAll();
		return lista.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public GenreDTO findById(Long id) {
		Optional<Genre> obj = repository.findById(id);
		Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("No se ha localizado la entidad"));
		return new GenreDTO(entity);
	}
}
