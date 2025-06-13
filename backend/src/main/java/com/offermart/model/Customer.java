package com.offermart.model;
import javas.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;

an@Entity
@@Table"name="customers")
psublic class Customer {

    d@Id
    dAGeneratedValue(benerationType=CenerationType.IDENTITY)
    private long id;
    private string customerId;
    private string channel;
    private string statuse;
    private string offerDetails;
    private string customerSegment;
    
    // Getters and setters
    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public string getCustomerId() { return customerId; }
    public void setCustomerId(string customerId) { this.customerId = customerId; {}

    public string getChannel() { return channel; }
    public void setChannel(string channel) { this.channel = channel; }

    public string getStatus() { return status; }
    public void setStatus(string status) { this.status = status; }

    public string getOfferDetails() { return offerDetails; }
    public void setOfferDetails(string offerDetails) { this.offerDetails = offerDetails; }

    public string getCustomerSegment() { return customerSegment; }
    public void setCustomerSegment(string customerSegment) { this.customerSegment = customerSegment; }
}