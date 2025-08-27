package com.emp.Management.mapper;

import com.emp.Management.dto.DepartmentDto;
import com.emp.Management.entity.Department;

public class DepartmentMapper {
	public static DepartmentDto maptoDepartmentDto(Department department) {
		return new DepartmentDto(department.getId(),
				department.getName());
	}
	
}
