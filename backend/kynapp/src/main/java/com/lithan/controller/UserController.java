package com.lithan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.entities.Users;
import com.lithan.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired 
	UserService userService;
	
	@Autowired 
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/register")
	public Users addUsers(@RequestBody Users user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		return userService.addUser(user);
	}
	
	@GetMapping("/register")
	List<Users> getUsers(){
		System.out.println("Getting Users");
		return userService.getUsers();
	}
	
//	@PostMapping("/login")
//	public Users loginController(@RequestBody Users userlogin) {
//		System.out.println("The login username is: "+userlogin.getUserName());
//		System.out.println("The login password is: "+userlogin.getPassword());
//		
//		String loginusername = userlogin.getUserName();
//		String loginpassword = userlogin.getPassword();
//		
//		Users user = userService.loginCheck(loginusername, loginpassword);
//		return user;
//	}
}
