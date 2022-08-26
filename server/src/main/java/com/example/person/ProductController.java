package com.example.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

	@Autowired
	ProductService productService;

	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@PostMapping("/saveProduct")
	public void saveProduct(@RequestBody Product product) {
		productService.saveProduct(product);
	}

	@GetMapping("/getProduct/{id}")
	public Product getPerson(@PathVariable int id) {
		return productService.getPerson(id);
	}

	@DeleteMapping("/deleteProduct/{id}")
	public void deletePerson(@PathVariable int id) {
		productService.deletePerson(id);
	}

	@PutMapping("/updateProduct/{id}")
	public void updateStudent(@RequestBody Product person, @PathVariable int id) {
		productService.updatePerson(id, person);
	}

	@GetMapping("/getProductByCategory/{name}")
	public List<Product> getPerson(@PathVariable String name) {
		return productService.getProductByCategory(name);
	}
	
	@GetMapping("/searchProductByName/{name}")
	public List<Product> searchProductByName(@PathVariable String name) {
		System.out.println("name:"+name);
		return productService.searchProductByName(name);
	}
	
	@GetMapping("/searchProductByCategory/{name}")
	public List<Product> searchProductByCategory(@PathVariable String name) {
		System.out.println("name:"+name);
		return productService.searchProductByCategory(name);
	}
	
	@GetMapping("/searchProductByPrice/{name}")
	public List<Product> searchProductByPrice(@PathVariable int name) {
		System.out.println("name:"+name);
		return productService.searchProductByPrice(name);
	}

}
