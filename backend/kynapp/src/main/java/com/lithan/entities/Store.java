package com.lithan.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;

	private String storename;

	private String storelocation;

	private String phoneno;

	private String description;

	public Store() {
		super();

	}

	public Store(int id, String storename, String storelocation, String phoneno, String description) {
		super();
		this.id = id;
		this.storename = storename;
		this.storelocation = storelocation;
		this.phoneno = phoneno;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStorename() {
		return storename;
	}

	public void setStorename(String storename) {
		this.storename = storename;
	}

	public String getStorelocation() {
		return storelocation;
	}

	public void setStorelocation(String storelocation) {
		this.storelocation = storelocation;
	}

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
