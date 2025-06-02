package com.dailycodebuffer.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.dailycodebuffer.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import java.util.List;


@Repository
public class StudentRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Student save(Student student) {
        dynamoDBMapper.save(student);
        return student;
    }

    public Student getStudentById(String studentId) {
        return dynamoDBMapper.load(Student.class, studentId);
    }


    public List<Student> getAllStudents() {
        return dynamoDBMapper.scan(Student.class, new DynamoDBScanExpression());
    }



    public String deleteStudentById(String studentId) {
        Student student = dynamoDBMapper.load(Student.class, studentId);
        dynamoDBMapper.delete(student);
        return "Student with id " + studentId + " was deleted";
    }

    public String updateStudent(String studentId, Student student) {
        dynamoDBMapper.save(student,
                new DynamoDBSaveExpression()
                        .withExpectedEntry("student_id",
                                new ExpectedAttributeValue(
                                        new AttributeValue().withS(studentId)

                                )));
        return "Student with id " + studentId + " was updated";

    }

}
