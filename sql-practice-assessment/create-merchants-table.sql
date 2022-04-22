CREATE TABLE merchants (
    id SERIAL PRIMARY KEY NOT NULL,
    merchant_name VARCHAR(255) NOT NULL,
    country_id INTEGER NOT NULL,
    FOREIGN KEY (country_id) REFERENCES countries,
    created_at TIMESTAMP NOT NULL,
    admin_id INTEGER NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES users,
    merchant_type_id INTEGER NOT NULL,
    FOREIGN KEY (merchant_type_id) REFERENCES merchant_types
);