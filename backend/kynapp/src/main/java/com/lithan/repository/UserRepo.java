package com.lithan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lithan.entities.Users;

@Repository
public interface UserRepo extends JpaRepository<Users, Integer>{
	Users findByUserName(String username);
}
