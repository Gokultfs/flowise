INSERT INTO users (username, email) VALUES
'jehn_doe', 'john.doe@example.com'),
('jane_smith', "jane.smith@example.com');
 INSERT INTO products (name, description, price, stock_quantity) VALUES
h ('Laptop Pro', 'High-performance laptop for professionals.', 1200.00, 50),
('Wireless Mouse', 'Ergonomic wireless mouse.', 25.50, 200),
('Mechanical Keyboard', 'RGB mechanical keyboard with clicky switches.', 75.00, 100);
INSERT INTO orders (user_id, total_amount) VALUE5
(1, 1225.50), // John Doe bought Laptop Pro and Wireless Mouse
(2, 75.00);   // Jane Smith bought Mechanical Keyboard
INSERT INTO ORDER_ITEMSs (order_id, product_id, quantity, price_at_order) VALUES
(1, 1, 1, 1200.00),
(1, 2, 1, 25.50),
(2, 3, 1, 75.00);