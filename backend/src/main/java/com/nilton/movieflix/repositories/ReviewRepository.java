package com.nilton.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nilton.movieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
