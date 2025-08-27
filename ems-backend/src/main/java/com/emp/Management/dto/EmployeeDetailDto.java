package com.emp.Management.dto;

public class EmployeeDetailDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private DepartmentDto department;
    private AddressDto addressDto;
    public EmployeeDetailDto() {}

    public EmployeeDetailDto(Long id, String firstName, String lastName, String email, DepartmentDto department ,AddressDto addressDto) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.addressDto=addressDto;
    }
    
    public AddressDto getAddressDto() {
		return addressDto;
	}

	public void setAddressDto(AddressDto addressDto) {
		this.addressDto = addressDto;
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
