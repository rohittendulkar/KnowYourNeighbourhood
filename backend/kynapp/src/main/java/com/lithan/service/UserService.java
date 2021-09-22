package com.lithan.service;

import java.util.List;

import com.lithan.entities.Users;

public interface UserService {

	public Users addUser(Users user);
	public List<Users> getUsers();
	public Users loginCheck(String loginusername, String loginpassword);
}
