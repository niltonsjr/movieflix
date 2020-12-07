package com.nilton.movieflix.dto;

import java.io.Serializable;

import com.nilton.movieflix.entities.Movie;
import com.nilton.movieflix.entities.Review;
import com.nilton.movieflix.entities.User;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String text;
	private UserDTO user;
	private MovieDTO movie;

	public ReviewDTO() {

	}

	public ReviewDTO(Long id, String text, User user, Movie movie) {
		this.id = id;
		this.text = text;
		this.user = new UserDTO(user);
		this.movie = new MovieDTO(movie);
	}

	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		user = new UserDTO(entity.getUser());
		movie = new MovieDTO(entity.getMovie());
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

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public MovieDTO getMovie() {
		return movie;
	}

	public void setMovie(MovieDTO movie) {
		this.movie = movie;
	}

}
