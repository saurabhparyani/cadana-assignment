CREATE TABLE Cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount_of_A_bought INT,
    amount_of_B_bought INT,
    time TIMESTAMP,
    discount FLOAT
);