package com.emp.Management.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.emp.Management.dto.EmployeeSummaryDto;
import com.emp.Management.dto.EmployeeDetailDto;
import com.emp.Management.service.EmployeeService;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService ) {
        this.employeeService = employeeService;
    }

    @PostMapping
    public ResponseEntity<EmployeeDetailDto> createEmployee(@RequestBody EmployeeDetailDto employeeDto) {
        EmployeeDetailDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDetailDto> getEmployeeById(@PathVariable Long id) {
        EmployeeDetailDto employeeDto = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeSummaryDto>> getAllEmployees() {
        List<EmployeeSummaryDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDetailDto> updateEmployee(@PathVariable Long id,
                                                            @RequestBody EmployeeDetailDto updatedEmployee) {
        EmployeeDetailDto employeeDto = employeeService.updateEmployee(id, updatedEmployee);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(employeeDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Employee Removed");
    }
    
//    @PostMappint("/{id}/address")
//    
}
