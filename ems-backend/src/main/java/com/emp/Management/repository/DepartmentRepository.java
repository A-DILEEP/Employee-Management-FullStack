package com.emp.Management.repository;
import com.emp.Management.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
  
}

