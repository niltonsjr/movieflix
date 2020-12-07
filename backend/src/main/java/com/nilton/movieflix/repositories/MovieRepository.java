package com.nilton.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nilton.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
