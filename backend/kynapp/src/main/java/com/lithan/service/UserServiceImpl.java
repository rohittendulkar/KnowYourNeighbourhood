package com.lithan.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.entities.Users;
import com.lithan.repository.UserRepo;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepo userrepo;
	
	@Override
	public Users addUser(Users user) {
			
			 return userrepo.save(user);
		}

	@Override
	public List<Users> getUsers() {
		// TODO Auto-generated method stub
		List<Users> user = userrepo.findAll();
		return user;
	}
	
	@Override
	public Users loginCheck(String loginusername, String loginpass) {
		// TODO Auto-generated method stub
		
		Users repo=userrepo.findByUserName(loginusername);
		
		if(repo==null) {
			System.out.println("User does not exist!");
			return null;
		}
		
		if(repo!=null) {
			String realpass=repo.getPassword();
			if(realpass.equals(loginpass)) {
				System.out.println("Password Matches");	
			}else {
				System.out.println("Password Mismatch");
				return null;
			}
		}
		return repo;
	}
}
