package com.dailycodebuffer.controller;

import com.dailycodebuffer.entity.Student;
import com.dailycodebuffer.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    public Student saveStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable("id") String studentId) {
        return studentRepository.getStudentById(studentId);
    }

    @GetMapping("/student")
    public List<Student> getAllStudents() {
        return studentRepository.getAllStudents();
    }


    @DeleteMapping("/student/{id}")
    public String deleteStudentById(@PathVariable("id") String studentId) {
        return studentRepository.deleteStudentById(studentId);
    }

    @PutMapping("/student/{id}")
    public String updateStudent(@PathVariable("id") String studentId, @RequestBody Student student) {
        return studentRepository.updateStudent(studentId, student);
    }



}
