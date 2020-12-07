package com.nilton.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nilton.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
