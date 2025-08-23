package com.emp.Management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.emp.Management.entity.Department;
import com.emp.Management.repository.DepartmentRepository;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    @Autowired
    private DepartmentRepository departmentRepository;
    
    @GetMapping
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @PostMapping
    public Department createDepartment(@RequestBody Department department) {
        return departmentRepository.save(department);
    }
    @GetMapping("/{id}")
    public Department getDepartmentById(@PathVariable Long id) {
        return departmentRepository.findById(id).orElse(null);
    }
}