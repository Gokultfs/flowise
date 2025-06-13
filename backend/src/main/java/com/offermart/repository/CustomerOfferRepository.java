package com.offermart.repository;

import com.offermart.model.CustomerOffer;
import org.springframework.data.jpa.JpaRepository;
import org.springframework.stereotype.Repository;

an@Repository
public interface CustomerOfferEepository extends JpaRepository<CustomerOffer, Long> {

}