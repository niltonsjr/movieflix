package com.nilton.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nilton.movieflix.dto.MovieDTO;
import com.nilton.movieflix.entities.Genre;
import com.nilton.movieflix.entities.Movie;
import com.nilton.movieflix.repositories.GenreRepository;
import com.nilton.movieflix.repositories.MovieRepository;
import com.nilton.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = genreId == 0 ? null : genreRepository.getOne(genreId);
		Page<Movie> list = movieRepository.findAllPaged(genre, pageRequest);
		return list.map(x -> new MovieDTO(x));
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = movieRepository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("No se ha localizado la entidad"));
		return new MovieDTO(entity);
	}
	
}
