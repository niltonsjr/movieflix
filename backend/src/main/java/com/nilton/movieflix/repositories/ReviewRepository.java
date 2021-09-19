package com.nilton.movieflix.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nilton.movieflix.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

	@Query("SELECT obj FROM Review obj WHERE :movieId = obj.movie.id")
	List<Review> findAllByMovieId(Long movieId);

}
