SELECT users.full_name, merchants.merchant_name, countries.name, merchant_types.type
FROM users
         JOIN merchants ON (users.id = admin_id)
         JOIN countries ON (country_id = countries.id)
         JOIN merchant_types ON (merchant_types.id = merchant_type_id)
ORDER BY merchant_name;

-- merchant_name, country_id, created_at, admin_id, merchant_type_id
