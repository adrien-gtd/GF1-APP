CREATE TABLE IF NOT EXISTS recipes  (
    recipe_id  INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(50) NOT NULL,
    recipe_description VARCHAR(10000) NOT NULL,
    image_uri VARCHAR(2048),
    UNIQUE (recipe_name),
    PRIMARY KEY (recipe_id)
);

ALTER TABLE recipes ADD FULLTEXT(recipe_name, recipe_description); --permet d'autoriser la recherche de recettes FULLTEXT 

CREATE TABLE IF NOT EXISTS ingredients (
    ingredient_id INT NOT NULL AUTO_INCREMENT,
    ingredient_name VARCHAR(50) NOT NULL  ,
    co2_per_unit FLOAT,
    price_per_unit FLOAT,
    unit VARCHAR(2) NOT NULL,
    UNIQUE (ingredient_name),
    PRIMARY KEY (ingredient_id)
);

ALTER TABLE ingredients ADD FULLTEXT(ingredient_name); --permet d'autoriser la recherche FULLTEXT 

CREATE TABLE IF NOT EXISTS ingredients_list (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (ingredient_id)
        REFERENCES ingredients(ingredient_id)
        ON DELETE CASCADE,
    FOREIGN KEY (recipe_id)
        REFERENCES recipes(recipe_id)
        ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, ingredient_id)
);



CREATE TABLE IF NOT EXISTS equipments (
    equipment_id INT NOT NULL AUTO_INCREMENT,
    equipment_name VARCHAR(50) NOT NULL  ,
    equipment_image_url VARCHAR(2048),
    UNIQUE (equipment_name),
    PRIMARY KEY (equipment_id)
);

CREATE TABLE IF NOT EXISTS equipments_list (
    recipe_id INT NOT NULL,
    equipment_id INT NOT NULL,
    FOREIGN KEY (equipment_id)
        REFERENCES equipments(equipment_id)
        ON DELETE CASCADE,
    FOREIGN KEY (recipe_id)
        REFERENCES recipes(recipe_id)
        ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, equipment_id)
);






------- inserts here --------
-- INSERT INTO equipments (equipment_name, equipment_image_url) VALUE ("Four", "https://cdn-icons-png.flaticon.com/512/3565/3565450.png");


-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Poulet au curry", "faire la recette!!");
-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Pâtes à la Carbonara", "Recette de pâtes à base de lardons, d'œufs, de parmesan et de crème fraîche.");
-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Salade Caesar", "Recette de salade à base de salade, de poulet, de croûtons et de parmesan, accompagnée d'une sauce Caesar.");
-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Omelette aux champignons", "Recette d'omelette simple à base d'œufs, de champignons frais, d'oignons et de fromage.");
-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Quiche Lorraine", "Recette de quiche à base de pâte brisée, de lardons et de fromage, accompagnée d'une crème à base d'œufs et de lait.");
-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Pizza Margherita", "Recette de pizza à base de sauce tomate, de mozzarella, de basilic frais et d'huile d'olive.");
-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("Tarte aux pommes", "Recette de tarte aux pommes à base de pommes");

-- INSERT INTO recipes (recipe_name, recipe_description) VALUES ("test", "Première étape de la recette | Deuxième étape de la recette | voici la troisème étape | et maintenant la dernière étape");


-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Poulet", 10.0, 0.5, "g");

-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Curry", 0.2,0.05, "g");

-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Pâtes", 0.3, 0.05, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Lardons", 5.0, 0.15, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Œufs", 0.2, 0.12, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Parmesan", 10.0, 0.3, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Crème fraîche", 5.0, 0.2, "g");

-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Salade", 0.3, 0.3, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Huile d'olive", 0.4, 0.1, "ml");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Croûtons", 3.0, 0.1, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Sauce Caesar", 10.0, 0.2, "ml");

-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Sel", 0.0, 0.01, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Poivre", 0.1, 0.02, "g");

-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Champignons", 1.0, 0.4, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Fromage râpé", 8.0, 0.3, "g");

-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Pâte brisée", 0.5,0.8, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Oignons", 0.2, 0.2, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Riz", 0.1,0.03, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Lait de coco", 0.2, 0.6, "ml");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Pommes", 0.1, 0.25, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Sucre", 0.2, 0.02, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Beurre", 0.6, 0.15, "g");
-- INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES ("Lait", 0.2, 0.05, "ml");


-- -- poulet curry 1, carbo 2, salade césar 3, omelette aux champignons 4, quiche lorraine 5, pizza 6, arte aux pommes 7

-- -- poulet 1, curry 2, pâtes 3; Lardons 4; oeuf 5; parmesan 6; crème fraîche 7, salade 8, huile d olive 9, croûtons 10, sauce césar 11, sel 12, 
-- -- Poivre 13, champignons 14, fromage rapé 15, pate brisée 16, oignons 17, riz 18, lait de coco 19, pommes 20, sucre 21, beurre 22, lait 23,



-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (2, 3, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (2, 4, 50);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (2, 5, 2);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (2, 6, 30);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (2, 7, 20);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (2, 12, 5);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (2, 13, 2);

-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (3, 8, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (3, 1, 150);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (3, 10, 30);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (3, 6, 20);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (3, 11, 30);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (3, 12, 5);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (3, 13, 2);

-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (1, 1, 300);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (1, 17, 1);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (1, 18, 2);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (1, 19, 20);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (1, 2, 5);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (1, 12, 5);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (1, 13, 2);

-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (7, 20, 4);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (7, 16, 200);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (7, 21, 50);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (7, 22, 30);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (7, 5, 2);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (7, 23, 10);

-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (4, 5, 3);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (4, 14, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (4, 9, 10);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (4, 12, 1);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (4, 13, 1);

-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (5, 16, 200);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (5, 4, 150);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (5, 5, 4);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (5, 7, 20);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (5, 23, 10);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (5, 12, 1);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (5, 13, 1);

-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 1, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 2, 200);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 3, 10);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 4, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 5, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 7, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 8, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 9, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 10, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 11, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 12, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 13, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 14, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 15, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 16, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 17, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 18, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 19, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 20, 100);
-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (8, 21, 100);


-- INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (6, 13, 100);
