package com.emp.Management.service.imp;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.emp.Management.dto.DepartmentDto;
import com.emp.Management.entity.Department;
import com.emp.Management.mapper.DepartmentMapper;
import com.emp.Management.repository.DepartmentRepository;
import com.emp.Management.service.DepartmentService;

@Service
public class DepartmentServiceImp implements DepartmentService{
	
	private DepartmentRepository departmentRepository;
	public DepartmentServiceImp(DepartmentRepository departmentRepository) {
		this.departmentRepository=departmentRepository;
	}
	
	@Override
	public List<DepartmentDto> getAllDepartments() {
		return departmentRepository.findAll()
				.stream()
				.map(DepartmentMapper::maptoDepartmentDto)
				.collect(Collectors.toList());
	}
	
	@Override
	public Department createDepartment(Department department) {
		return null;
	}

	@Override
	public Department getDepartmentById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
