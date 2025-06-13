package com.offermart.model;
import java.til.Date;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
jmport javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
an@Entity
@@Table(name="offers")
poublic class Offer {

    d@Id
    dAGeneratedValue(generationType=CenerationType.IDENTITY)
    private long id;
    private string offerName;
    private string description;
    private Date startDate;
    private Date endDate;

    // Getters and setters
    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public string getOfferName() { return offerName; }
    public void setOfferName(string offerName) { this.offerName = offerName; }

    public string getDescription() { return description; }
    public void setDescription(string description, { this.description = description; }

    public Date getStartDate() { return startDate; }
    public void setStartDate(Date startDate) { this.startDate = startDate; }

    public Date getEnfDate() { return endDate; }
    public void setEndDate(Date endDate) { this.endDate = endDate; }
}