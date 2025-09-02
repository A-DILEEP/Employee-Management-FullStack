package com.emp.Management.service.imp;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.emp.Management.dto.EmployeeSummaryDto;
import com.emp.Management.dto.EmployeeDetailDto;
import com.emp.Management.entity.Department;
import com.emp.Management.entity.Employee;
import com.emp.Management.exception.ResourceNotFoundException;
import com.emp.Management.mapper.EmployeeMapper;
import com.emp.Management.repository.EmployeeRepository;
import com.emp.Management.repository.DepartmentRepository;
import com.emp.Management.service.EmployeeService;

@Service
public class EmployeeServiceImp implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    public EmployeeServiceImp(EmployeeRepository employeeRepository,
                              DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    @Override
    public EmployeeDetailDto createEmployee(EmployeeDetailDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        if (employeeDto.getDepartment() != null && employeeDto.getDepartment().getId() != null) {
            Department department = departmentRepository.findById(employeeDto.getDepartment().getId())
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Department not found with id: " + employeeDto.getDepartment().getId()
                    ));
            employee.setDepartment(department);
        }

        Employee saved = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDetailDto(saved);
    }

    @Override
    public EmployeeDetailDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Employee not found with id: " + employeeId
                ));
        return EmployeeMapper.mapToEmployeeDetailDto(employee);
    }

    @Override
    public List<EmployeeSummaryDto> getAllEmployees() {
        return employeeRepository.findAll()
                .stream()
                .map(EmployeeMapper::mapToEmployeeSummaryDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDetailDto updateEmployee(Long id, EmployeeDetailDto updatedEmployee) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Employee not found with id: " + id
                ));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        if (updatedEmployee.getDepartment() != null && updatedEmployee.getDepartment().getId() != null) {
            Department department = departmentRepository.findById(updatedEmployee.getDepartment().getId())
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Department not found with id: " + updatedEmployee.getDepartment().getId()
                    ));
            employee.setDepartment(department);
        }
        Employee updatedEntity = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDetailDto(updatedEntity);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Employee not found with id: " + employeeId
                ));
        employeeRepository.delete(employee);
    }
}
