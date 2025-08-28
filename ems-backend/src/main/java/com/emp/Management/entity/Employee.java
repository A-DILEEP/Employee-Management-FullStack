package com.emp.Management.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name="employees")
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="emailId", nullable=false, unique=true)
	private String email;
	
	@ManyToOne
	@JoinColumn(name="department_id")
	@JsonBackReference   
	private Department department;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="address_id",referencedColumnName="id")
	private Address address;
	
	@ManyToMany
	@JoinTable(
		    name = "employee_projects",
		    joinColumns = @JoinColumn(name = "employee_id"),
		    inverseJoinColumns = @JoinColumn(name = "project_id")
		)
	private List<Project> projects = new ArrayList<>();
	
	public Employee(Long id, String firstName, String lastName, String email, Department department,Address address) {
		super();
		Id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.department = department;
		this.address=address;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	@Override
	public String toString() {
		return "Employee [Id=" + Id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", department=" + department + ", address=" + address + ", projects=" + projects + "]";
	}
	public Employee() {
		super();
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<Project> getProjects() {
		return projects;
	}
	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}
	public Employee(Long id, String firstName, String lastName, String email, Department department, Address address,
			List<Project> projects) {
		super();
		Id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.department = department;
		this.address = address;
		this.projects = projects;
	}
	
}
