package com.example.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	@Autowired
	ProductRepo productRepo;
	
	List<Product> getAllProducts(){
		return productRepo.findAll();
	}

	public void saveProduct(Product product) {
		productRepo.save(product);	
	}

	public Product getPerson(int id) {
		return productRepo.findById(id).orElse(null);
	}

	public void deletePerson(int id) {
		productRepo.deleteById(id);	
	}

	public void updatePerson(int id, Product person) {
		person.setProductId(id);
		productRepo.save(person);
	}

	public List<Product> getProductByCategory(String name) {
		List<Product> product = productRepo.getProductByCategory(name);
		return product;
	}

	public List<Product> searchProductByName(String name) {
		List<Product> product = productRepo.searchProductByName(name);
		return product;
	}

	public List<Product> searchProductByCategory(String name) {
		List<Product> product = productRepo.searchProductByCategory(name);
		return product;
	}

	public List<Product> searchProductByPrice(int name) {
		List<Product> product = productRepo.searchProductByPrice(name);
		return product;
	}
	

}
