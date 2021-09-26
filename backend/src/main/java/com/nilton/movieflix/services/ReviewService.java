package com.nilton.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nilton.movieflix.dto.ReviewDTO;
import com.nilton.movieflix.entities.Review;
import com.nilton.movieflix.repositories.MovieRepository;
import com.nilton.movieflix.repositories.ReviewRepository;
import com.nilton.movieflix.repositories.UserRepository;

@Service
public class ReviewService {

	private static Logger logger = LoggerFactory.getLogger(UserService.class);

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AuthService authService;

	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll() {
		List<Review> lista = reviewRepository.findAll();
		return lista.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public List<ReviewDTO> findByMovieId(Long movieId) {
		List<Review> lista = reviewRepository.findAllByMovieId(movieId);
		logger.info("Review found");
		return lista.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = new Review();
		entity.setText(dto.getText());
		entity.setMovie(movieRepository.getOne(dto.getMovieId()));
		entity.setUser(userRepository.getOne(authService.authenticated().getId()));
		entity = reviewRepository.save(entity);
		logger.info("Review Saved: " + entity.getId());
		return new ReviewDTO(entity);
	}

}
