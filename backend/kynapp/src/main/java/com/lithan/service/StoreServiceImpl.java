package com.lithan.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.entities.Store;
import com.lithan.repository.StoreRepo;

@Service
@Transactional
public class StoreServiceImpl implements StoreService {

	@Autowired StoreRepo storerepo;

	@Override
	public Store addStore (Store store) {
		// TODO Auto-generated method stub
		return storerepo.save(store);
	}

	@Override
	public List<Store> getAllStores() {
		// TODO Auto-generated method stub
		List <Store> store = storerepo.findAll();
		return store;
	}

	@Override
	public Optional<Store> findStoreById(int id) {
		// TODO Auto-generated method stub
		return storerepo.findById(id);
	}

	@Override
	public void deleteStoreById(int id) {
		// TODO Auto-generated method stub
		storerepo.deleteById(id);
	}

	@Override
	public List<Store> searchStores(String keyword) {
		List<Store> store = storerepo.search(keyword);
		return store;
	}
	
	
}
