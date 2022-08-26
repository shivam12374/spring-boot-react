package com.example.person;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PersonRepo extends JpaRepository<Person, Integer> {

    @Query(value = "SELECT * FROM person where name=?1 ", nativeQuery = true)
	Person getPersonByName(String name);

    @Query(value = "SELECT * FROM person where name=?1 and role=?2 ", nativeQuery = true)
    Person login(String name, String role);
}
