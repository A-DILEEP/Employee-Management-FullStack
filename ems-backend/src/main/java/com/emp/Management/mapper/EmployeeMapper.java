package com.emp.Management.mapper;

import com.emp.Management.dto.DepartmentDto;
import com.emp.Management.dto.EmployeeSummaryDto;
import com.emp.Management.dto.EmployeeDetailDto;
import com.emp.Management.entity.Employee;

public class EmployeeMapper {

    public static EmployeeSummaryDto mapToEmployeeSummaryDto(Employee employee) {
        if (employee == null) return null;

        return new EmployeeSummaryDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static EmployeeDetailDto mapToEmployeeDetailDto(Employee employee) {
        if (employee == null) return null;

        DepartmentDto departmentDto = null;
        if (employee.getDepartment() != null) {
            departmentDto = new DepartmentDto(
                    employee.getDepartment().getId(),
                    employee.getDepartment().getName()
            );
        }

        return new EmployeeDetailDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                departmentDto
        );
    }

    public static Employee mapToEmployee(EmployeeDetailDto employeeDto) {
        if (employeeDto == null) return null;

        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail(),
                null 
        );
    }
}
