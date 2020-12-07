package com.nilton.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nilton.movieflix.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
