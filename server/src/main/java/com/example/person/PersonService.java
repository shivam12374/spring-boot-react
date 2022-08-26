package com.example.person;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    PersonRepo personRepo;

    public List<Person> getAllPersons(){
        List<Person> personList = new ArrayList<>();
        personRepo.findAll().forEach(personList::add);
        return personList;
    }

    public Person getPerson(int id){
        return personRepo.findById(id).orElse(null);
    }

    public void addPerson(Person person){
    	person.setRole("Customer");
        personRepo.save(person);
    }

    public void deletePerson(int id){
        personRepo.deleteById(id);
    }

    public void updatePerson(int id, Person person){
        person.setId(id);
        personRepo.save(person);
    }

	public Person getPersonByName(String name) {
		Person person = personRepo.getPersonByName(name);
		return person;
	}

	public void login(Person person) {
		Person response = personRepo.login(person.getName(),person.getRole());
		
	}
}
