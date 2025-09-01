package com.emp.Management.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmployeeDetailDto {
    private Long id;
    
    @NotBlank(message="firstName is Required")
    private String firstName;
    @NotBlank(message="lastName is Required")
    private String lastName;
   
    @Email(message = "Email should be valid")
    @NotBlank(message = "Email is required")
    private String email;    
    
    private DepartmentDto department;
    private AddressDto address;
    public EmployeeDetailDto() {}

    public EmployeeDetailDto(Long id, String firstName, String lastName, String email, DepartmentDto department ,AddressDto address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.address=address;
    }
    
    public AddressDto getAddressDto() {
		return address;
	}

	public void setAddressDto(AddressDto address) {
		this.address = address;
	}

	public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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

    public DepartmentDto getDepartment() {
        return department;
    }
    public void setDepartment(DepartmentDto department) {
        this.department = department;
    }
}
