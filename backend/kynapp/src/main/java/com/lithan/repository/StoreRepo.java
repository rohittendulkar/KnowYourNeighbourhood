package com.lithan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lithan.entities.Store;
@Repository
public interface StoreRepo extends JpaRepository<Store, Integer>{
	
	 @Query(value = 
	  
	  	"SELECT c FROM Store c WHERE c.storename LIKE '%' || :keyword || '%'"
	  	+ " OR c.storelocation LIKE '%' || :keyword || '%'"
		+ " OR c.phoneno LIKE '%' || :keyword || '%'"
		+ " OR c.description LIKE '%' || :keyword || '%'"
	  )
    public List<Store> search(@Param("keyword") String keyword);
	
}
