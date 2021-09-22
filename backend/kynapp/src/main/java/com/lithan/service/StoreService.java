package com.lithan.service;

import java.util.List;
import java.util.Optional;


import com.lithan.entities.Store;

public interface StoreService {

	public Store addStore(Store store);
	public List<Store> getAllStores();
	public Optional<Store>  findStoreById(int id);
	public void  deleteStoreById(int id);
	public List<Store> searchStores(String keyword);
}
