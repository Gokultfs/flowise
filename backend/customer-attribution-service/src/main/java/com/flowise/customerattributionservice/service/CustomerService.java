package com.flowise.customerattributionservice.service;

import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    public String getCustomerDetails(String customerId) {
        return "Fetching customer details for:" + customerId;
    }

    public String(updateAttribution(String customerId) {
        return "Updating attribution for customer";
    }

}
  