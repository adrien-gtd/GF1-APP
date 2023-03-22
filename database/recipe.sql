
CREATE TABLE IF NOT EXISTS recipes  (
    recipe_id  INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(50) NOT NULL,
    recipe_description VARCHAR(1000) NOT NULL,
    image_uri VARCHAR(2048),
    UNIQUE (recipe_name),
    PRIMARY KEY (recipe_id)
);

CREATE TABLE IF NOT EXISTS ingredients (
    ingredient_id INT NOT NULL AUTO_INCREMENT,
    ingredient_name VARCHAR(50) NOT NULL  ,
    co2_per_unit INT,
    price_per_unit INT,
    UNIQUE (ingredient_name),
    PRIMARY KEY (ingredient_id)
);

CREATE TABLE IF NOT EXISTS ingredients_list (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity INT NOT NULL,
    quantity_type VARCHAR(50) NOT NULL,
    FOREIGN KEY (ingredient_id)
        REFERENCES ingredients(ingredient_id)
        ON DELETE CASCADE,
    FOREIGN KEY (recipe_id)
        REFERENCES recipes(recipe_id)
        ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, ingredient_id)
);





------- inserts here --------
INSERT INTO ingredients (ingredient_name) VALUES ("Poulet");
INSERT INTO ingredients (ingredient_name) VALUES ("Curry");

INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Poulet au curry", "faire la recette!!");
INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity, quantity_type) VALUES (1, 1, 10, "kg");
INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity, quantity_type) VALUES (1, 2, 11, "l");



------- selects here --------

