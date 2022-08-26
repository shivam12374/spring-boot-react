package com.example.person;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepo extends JpaRepository<Product, Integer> {

	@Query(value = "SELECT * FROM product where product_category=?1 ", nativeQuery = true)
	List<Product> getProductByCategory(String name);

	@Query(value = "SELECT * FROM product where product_name like %:name% ", nativeQuery = true)
	List<Product> searchProductByName(@Param("name") String name);
	
	@Query(value = "SELECT * FROM product where product_category like %:category% ", nativeQuery = true)
	List<Product> searchProductByCategory(@Param("category") String name);
	
	@Query(value = "SELECT * FROM product where price like %:price%  ", nativeQuery = true)
	List<Product> searchProductByPrice(@Param("price") int name);

}
