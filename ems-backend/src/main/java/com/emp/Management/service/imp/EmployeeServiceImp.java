package com.emp.Management.service.imp;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.emp.Management.dto.EmployeeDto;
import com.emp.Management.entity.Employee;
import com.emp.Management.exception.ResourceNotFoundException;
import com.emp.Management.mapper.EmployeeMapper;
import com.emp.Management.repository.EmployeeRepository;
import com.emp.Management.service.EmployeeService;

@Service
public class EmployeeServiceImp implements EmployeeService {
	
	private EmployeeRepository employeeRepository;
	public EmployeeServiceImp(EmployeeRepository employeeRepository) {
		this.employeeRepository=employeeRepository;
	}
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		Employee saved=employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(saved);
	}
	
	@Override
	public EmployeeDto getEmployeeById(Long EmployeeId) {
		Employee employee = employeeRepository.findById(EmployeeId)
		.orElseThrow(()-> new ResourceNotFoundException("Employee does not exist with this id "+EmployeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}
	
	
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees=employeeRepository.findAll();
		return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee))
				.collect(Collectors.toList());
	}
	
	public EmployeeDto updateEmployee(Long id, EmployeeDto updatedEmployee) {
		Employee employee=employeeRepository.findById(id)
		.orElseThrow(()->new ResourceNotFoundException("Employee not found !"+id));
		employee.setId(id);
		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());
		Employee updatedEmploye=employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(updatedEmploye);
	}
	
	@Override
	public void deleteEmployee(Long EmployeeId) {
		Employee employee=employeeRepository.findById(EmployeeId).orElseThrow(()->new ResourceNotFoundException("Employee Doesnt Exist"));
		employeeRepository.deleteById(EmployeeId);
	}	
}
