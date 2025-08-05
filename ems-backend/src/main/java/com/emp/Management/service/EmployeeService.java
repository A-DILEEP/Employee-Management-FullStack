package com.emp.Management.service;
import com.emp.Management.dto.EmployeeDto;
import java.util.*;

public interface EmployeeService {
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	EmployeeDto getEmployeeById(Long EmployeeId);
	List<EmployeeDto>getAllEmployees();
	EmployeeDto updateEmployee(Long id,EmployeeDto updatedEmployee);
	void deleteEmployee(Long EmployeeId);
}
