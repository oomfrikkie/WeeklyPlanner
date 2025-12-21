-- =====================================================
-- ACCOUNTS
-- =====================================================
CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password_hash VARCHAR(255) NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    status VARCHAR(50) DEFAULT 'AWAITING_VERIFICATION',
    failed_login_attempts INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- ACCOUNT TOKENS
-- =====================================================
CREATE TABLE IF NOT EXISTS account_token (
    token_id SERIAL PRIMARY KEY,
    token UUID NOT NULL UNIQUE,
    token_type VARCHAR(50) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    is_used BOOLEAN DEFAULT FALSE,
    used_at TIMESTAMP NULL,
    account_id INTEGER NOT NULL,
    CONSTRAINT fk_account
        FOREIGN KEY (account_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE
);

-- =====================================================
-- CATEGORIES
-- =====================================================
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- =====================================================
-- PRODUCTS
-- =====================================================
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- PRODUCT ↔ CATEGORY (many-to-many)
-- =====================================================
CREATE TABLE IF NOT EXISTS product_categories (
    product_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    PRIMARY KEY (product_id, category_id),
    CONSTRAINT fk_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE CASCADE
);

-- =====================================================
-- CART
-- =====================================================
CREATE TABLE IF NOT EXISTS cart (
    id SERIAL PRIMARY KEY,
    account_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_cart_account
        FOREIGN KEY (account_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_cart_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);

-- =====================================================
-- SEED CATEGORIES
-- =====================================================
INSERT INTO categories (name) VALUES
('Clothing'),
('Streetwear'),
('Shoes'),
('Accessories'),
('Sale')
ON CONFLICT DO NOTHING;

-- =====================================================
-- SEED PRODUCTS
-- =====================================================
INSERT INTO products (title, brand, description, price) VALUES
('Oversized Hoodie', 'UrbanWave', 'Heavy cotton oversized hoodie', 59.99),
('Classic White Tee', 'UrbanWave', 'Essential everyday t-shirt', 19.99),
('Slim Fit Jeans', 'DenimCo', 'Dark wash slim fit jeans', 79.99),
('Leather Sneakers', 'StepUp', 'Premium leather sneakers', 129.99),
('Baseball Cap', 'UrbanWave', 'Adjustable streetwear cap', 24.99);

-- =====================================================
-- LINK PRODUCTS TO CATEGORIES
-- =====================================================
-- Hoodie → Clothing, Streetwear
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id
FROM products p, categories c
WHERE p.title = 'Oversized Hoodie'
AND c.name IN ('Clothing', 'Streetwear');

-- Tee → Clothing
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id
FROM products p, categories c
WHERE p.title = 'Classic White Tee'
AND c.name = 'Clothing';

-- Jeans → Clothing
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id
FROM products p, categories c
WHERE p.title = 'Slim Fit Jeans'
AND c.name = 'Clothing';

-- Sneakers → Shoes, Streetwear
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id
FROM products p, categories c
WHERE p.title = 'Leather Sneakers'
AND c.name IN ('Shoes', 'Streetwear');

-- Cap → Accessories, Streetwear
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id
FROM products p, categories c
WHERE p.title = 'Baseball Cap'
AND c.name IN ('Accessories', 'Streetwear');
