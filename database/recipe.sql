CREATE TABLE IF NOT EXISTS recipes  (
    recipe_id  INT NOT NULL AUTO_INCREMENT,
    recipe_description VARCHAR(500) NOT NULL,
    receipe_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (recipe_id)
);

CREATE TABLE IF NOT EXISTS ingredients_list (
    receipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity INT NOT NULL,
    quantity_type quantity_type NOT NULL,
    FOREIGN KEY (ingrediant_id)
        REFERENCES ingredients(ingredient_id)
        ON DELETE CASCADE,
    FOREIGN KEY (receipe_id)
        REFERENCES recipes(receipe_id)
        ON DELETE CASCADE,
    PRIMARY KEY (receipe_id, ingredient_id)
);

CREATE TYPE quantity_type AS ENUM ('kg', 'l');

CREATE TABLE IF NOT EXISTS ingredients (
    ingredient_id INT NOT NULL AUTO_INCREMENT,
    ingredient_name VARCHAR(50) NOT NULL,
    co2_per_unit 
    price_per_unit 
    PRIMARY KEY (ingredient_id)
);

SELECT * from recipe;