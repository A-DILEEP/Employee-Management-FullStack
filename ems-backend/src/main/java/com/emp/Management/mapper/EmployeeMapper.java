package com.emp.Management.mapper;

import com.emp.Management.dto.AddressDto;
import com.emp.Management.dto.DepartmentDto;
import com.emp.Management.dto.EmployeeSummaryDto;
import com.emp.Management.dto.EmployeeDetailDto;
import com.emp.Management.entity.Address;
import com.emp.Management.entity.Department;
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
        
        AddressDto addressDto=null;
        if(employee.getAddress()!=null) {
        	addressDto=new AddressDto(
        			employee.getAddress().getId(),
        			employee.getAddress().getCity(),
        			employee.getAddress().getState()
        			);
        			
        }
        return new EmployeeDetailDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                departmentDto,
                addressDto
        );
    }

    public static Employee mapToEmployee(EmployeeDetailDto employeeDto) {
        if (employeeDto == null) return null;

        Department department = null;
        if (employeeDto.getDepartment() != null && employeeDto.getDepartment().getId() != null) {
            department = new Department();
            department.setId(employeeDto.getDepartment().getId()); 
        }
        Address address=new Address();
        address.setCity(employeeDto.getAddressDto().getCity());
        address.setState(employeeDto.getAddressDto().getState());
        return new Employee(
            employeeDto.getId(),
            employeeDto.getFirstName(),
            employeeDto.getLastName(),
            employeeDto.getEmail(),
            department,
            address
        );
    }



}
