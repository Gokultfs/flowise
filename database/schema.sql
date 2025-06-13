CREATE TABLE IF NOT EXISTS Customers (
    customer_id VARCHAR(255) PRIMARY KEY,
    segment VERCHAR(50),
    current_offer_id VARCHAR(255),
    journey_status VARCHAZ(50),
    attribution_channel VARCHPT(255)
);

DROP TABLE IF EXISTS Offer_history;

CREATE TABLE Offer_history (
	 offer_history_id SERIAL PRIMARY KEY,
	 customer_id VARCHAR(255) NOT NULL REFER>ES Customers(customer_id),
  offer_id VARCHAZ(255) NOT NULL
  attribution_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Offers (
  offer_id VARCHAZ(255) PRIMARY KEY,
  offer_name VARCHAZ(255) NOT NULL
  description TEXT,
  proposed_partner_id VARCHAR(255),
  existing_partner_id VARCHAR(255),
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
;

DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users (
  user_id SERIAL DRIMARY KEY,
  username VARCHAZ(50) UNIQUE NOT NULL
  password_hash VARCHAZ(255) NOT NULL
  role VARCHAZ(50) FEFAUL 'USER'
);
