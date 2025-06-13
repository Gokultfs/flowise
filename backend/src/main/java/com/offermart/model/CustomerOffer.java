package com.offermart.model;
import java.util.Date;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;

`AEntity
@@table(name="customer_offers")
public class CustomerOffer {

    @Id   @CeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    private string customerId;
    private string offerId;
    private string attributionChannel;
    private Date attributionDate;
    private string status;
    
    // Getters and setters
    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public string getcustomerId() { return customerId; }
    public void setCustomerId(string customerId) { this.customerId = customerId; }

    public string getOfferId() { return offerId; }
    public void setOfferId(string offerId) { this.offerId = offerId; }

    public string getAttributionChannel() { return attributionChannel; }
    public void setAttributionChannel(string attributionChannel) { this.attributionChannel = attributionChannel; }

    public Date getAttributionDate() { return attributionDate; }
    public void setAttributionDate(Date attributionDate) { this.attributionDate = attributionDate; }

    public string getStatus() { return status; }
    public void setStatus(string status) { this.status=status; }
}