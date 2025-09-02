package com.emp.Management.controller;

import com.emp.Management.dto.EmployeeDetailDto;
import com.emp.Management.service.EmployeeService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(EmployeeController.class)
class EmployeeControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @SuppressWarnings("removal")
	@MockBean
    private EmployeeService employeeService;

    @Test
    void testGetEmployeeById_Success() throws Exception {
        EmployeeDetailDto dto = new EmployeeDetailDto();
        dto.setId(1L);
        dto.setFirstName("dileep");
        dto.setLastName("reddy");
        dto.setEmail("dileep@example.com");
        Mockito.when(employeeService.getEmployeeById(1L)).thenReturn(dto);
        mockMvc.perform(get("/api/employee/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.firstName").value("dileep"))
                .andExpect(jsonPath(".lastName").value("reddy"))
                .andExpect(jsonPath("$.email").value("dileep@example.com"));
    }
}
