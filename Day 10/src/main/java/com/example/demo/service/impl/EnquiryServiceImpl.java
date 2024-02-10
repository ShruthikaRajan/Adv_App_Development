package com.example.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.request.EnquiryRequest;
import com.example.demo.dto.response.BasicResponse;
import com.example.demo.dto.response.EnquiryResponse;
import com.example.demo.dto.response.RegisterResponse;
import com.example.demo.model.Course;
import com.example.demo.model.Enquiry;
import com.example.demo.model.User;
import com.example.demo.repository.EnquiryRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class EnquiryServiceImpl implements EnquiryService{
        
        private final EnquiryRepository enquiryRepository;

    @Override
    public BasicResponse <EnquiryResponse> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        List<EnquiryResponse> enquiryRequests = enquiries.stream()
                .map(enquiry -> EnquiryResponse.builder()
                    .courseId(enquiry.getCourse().getCourseId())
                    .userId(enquiry.getUser().getId())
                    .enquiry(enquiry.getEnquiry())
                    .build())
                .collect(Collectors.toList());
        return BasicResponse.<EnquiryResponse>builder()
                .message("Enquiries data fetched successfully")
                .data(enquiryRequests)
                .build();
    }

    @Override
    public RegisterResponse addEnquiry(EnquiryRequest enquiryRequest) {
        Enquiry enquiry = Enquiry.builder()
                .user(User.builder().id(enquiryRequest.getUserId()).build()) // Assuming User is imported and has a builder method
                .course(Course.builder().courseId(enquiryRequest.getCourseId()).build()) // Assuming Course is imported and has a builder method
                .enquiry(enquiryRequest.getEnquiry())
                .build();
        enquiryRepository.save(enquiry);
        return RegisterResponse.builder()
                .message("Enquiry added successfully")
                .build();
    }
}
