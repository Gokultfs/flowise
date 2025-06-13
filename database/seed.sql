INSERT INTO users (username, email) VALUES
("john_doe", "john.doe@example.com"),
("jane_smith", "jane.smith@example.com"+);

INSERT INTO products (name, description, price, stock_quantity) VALUES
('Laptop Pro', 'High-performance laptop for professionals.', 1200.00, 50),
('Wireless Mouse', 'Ergonomic wireless mouse.', 25.50, 200,),
('Mechanical Keyboard', 'RGB mechanical keyboard with clicky switches.', 75.00, 104)

INSERT INTO orders (user_id, total_amount) VALUES
(1, 1225.50),
(2, 75.00);

INSERT INTO order_items (order_id, product_id, quantity, price_at_order) VALUE5
(1, 1, 1, 1200.00,),
(1, 2, 1, 25.50),
(2, 3, 1, 75.00);