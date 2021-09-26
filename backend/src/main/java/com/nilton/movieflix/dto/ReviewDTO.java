package com.nilton.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.nilton.movieflix.entities.Movie;
import com.nilton.movieflix.entities.Review;
import com.nilton.movieflix.entities.User;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "El campo no puede estar vacio.")
	private String text;
	private UserSimpleDTO user;
	private Long movieId;

	public ReviewDTO() {

	}

	public ReviewDTO(Long id, String text, User user, Movie movie) {
		this.id = id;
		this.text = text;
		this.user = new UserSimpleDTO(user);
		this.movieId = movie.getId();
	}

	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		user = new UserSimpleDTO(entity.getUser());
		movieId = entity.getMovie().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public UserSimpleDTO getUser() {
		return user;
	}

	public void setUser(UserSimpleDTO user) {
		this.user = user;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

}
