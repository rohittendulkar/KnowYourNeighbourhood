package com.lithan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.entities.Store;
import com.lithan.service.StoreService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/storecontroller")

public class StoreController {
	
	@Autowired
	StoreService storeService;
	
	@PostMapping("/api/store")
		public Store postStore (@RequestBody Store store) {
			return storeService.addStore(store);
		}
	
	@GetMapping("/api/store")
	public List<Store> getStores(){
		List<Store> store = storeService.getAllStores();
		return store;
	}
	
	@DeleteMapping("/api/store/{id}")
	public void deleteStore(@PathVariable Integer id ) {
		storeService.deleteStoreById(id);
	}
	
	@GetMapping(value = "/api/store/{id}")
	public Optional<Store> findStoreById(@PathVariable Integer id) {
		System.out.println("Get Store By Id");
		return storeService.findStoreById(id);
	}
	
	@RequestMapping(value = "/api/store/{id}", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
			public Store updateStore(@RequestBody Store store,@PathVariable Integer id) {

				Optional<Store> oldStore=storeService.findStoreById(id);
				if(oldStore.isPresent())
				{
					Store obj=oldStore.get();
					obj.setStorename(store.getStorename());
					obj.setStorelocation(store.getStorelocation());
					obj.setPhoneno(store.getPhoneno());
					obj.setDescription(store.getDescription());
					return storeService.addStore(obj);
					
				}	
				else 
				{
					return storeService.addStore(store);
				}
			}
	
	
	
	 @GetMapping("/api/store/storesearch/{keyword}") 
	 public List<Store> searchStores(@PathVariable("keyword") String keyword) {
	
		 List<Store> store = storeService.searchStores(keyword); 
		 return store; 
		 
	 
	 }
}
