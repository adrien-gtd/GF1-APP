/////////////////////////////////////////////////////////////////////////////////////
////// Ce fichier donne des exemples d'utilisation de la base de donnée /////////////
////////// La base de donnée est stockée sur un serveur Maria DB ////////////////////
/////////////////////////////////////////////////////////////////////////////////////
import connectionData from './dataBaseConfig.js'; 
import * as mysql from 'mysql2';
import express from 'express';

const app = express();
app.use(express.json());
const port = 80;


//Permet de se connecter au serveur DB
const con = mysql.createConnection(connectionData);

con.connect(function(err) {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + con.threadId);
});

// requête SQL
app.get('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const recipeInfo = await makeRequest(
      'SELECT recipe_name, recipe_description, image_uri, prix, co2, prix/10 as score_prix, co2/1500 as score_co2 \
      FROM (SELECT recipe_name, recipe_description, image_uri, recipe_id \
      FROM recipes \
      WHERE recipe_id = ?) AS table1 \
      JOIN (SELECT SUM(price_per_unit*quantity) AS prix, SUM(co2_per_unit*quantity) AS co2, recipe_id \
      FROM ingredients JOIN ingredients_list ON ingredients.ingredient_id = ingredients_list.ingredient_id \
      WHERE recipe_id = ?) AS table2 \
      ON table1.recipe_id = table2.recipe_id; \ ',
      [id, id]
    );
    const recipeIngredient = await makeRequest(
      'SELECT ingredients.ingredient_id, ingredient_name, quantity \
      FROM ingredients JOIN ingredients_list ON ingredients.ingredient_id = ingredients_list.ingredient_id \
      WHERE recipe_id = ?;',
      [id]
    );

    if(recipeInfo.length > 0){
      recipeInfo[0]['ingredients'] = recipeIngredient;
      res.json(recipeInfo[0]);
    }else res.json(recipeInfo)

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/random/:number', async (req, res) => {
  print('aaaa');
  const numberOfRecipesRequested = req.params.number;
  var numberOfRecipesInDataBase = await makeRequest(
    'SELECT COUNT(*) FROM recipes;',
    []
  );
  
  numberOfRecipesInDataBase = Object.values(numberOfRecipesInDataBase[0])[0];
  const numberRecipesSending = Math.min(numberOfRecipesRequested, numberOfRecipesInDataBase);

  const result = [];
  while (result.length < numberRecipesSending) {
    const randomInt = Math.floor(Math.random() * numberOfRecipesInDataBase) + 1;
    if (!result.includes(randomInt)) {
      result.push(randomInt);
    }
  }
  res.json(result);
});

app.get('/ingredientBegining/:begining', async (req, res) => {
  const begining = req.params.begining;
  console.log(typeof begining)
  const ingredientsList = await makeRequest(
    "SELECT * FROM ingredients WHERE LOWER(ingredient_name) LIKE LOWER('" + begining + "%');",
    []
  );
  res.json(ingredientsList);
});

app.get('/recipeBegining/:begining', async (req, res) => {
  const begining = req.params.begining;
  console.log(typeof begining)
  const ingredientsList = await makeRequest(
    "SELECT recipe_id, recipe_name FROM recipes WHERE LOWER(recipe_name) LIKE LOWER('" + begining + "%');",
    []
  );
  res.json(ingredientsList);
});


// envoie la requête à la base de données
const makeRequest = async (request, param) => {
  return new Promise((resolve, reject) => {
    con.execute(request, param, (err, results) => {
      if (err) {
        console.error('Error executing the query: ' + err.stack);
        reject(err);
        return;
      }
      if (results.length !== 0) {
        console.log(results);
        resolve(results);
      } else {
        console.log(
          'No result found. Request: ' + request + '. Params: ' + param + '.'
        );
        resolve([]);
      }
    });
  });
};

  //cette ligne montre comment exploiter les résultats
  // results.forEach(function(country) {
  //   console.log(`Pays : ${country.name}, nombre d'habitants: ${country.population}, capitale: ${country.capital}`);
  // });


// REchercher l'occurence d'un élément dans une base de données:
//  SELECT * FROM ft_table WHERE MATCH(c3) AGAINST ('Starship');
//
// Pour étendre la recherche aux mots proches qui sont rencontrés (que ce soit de manière sémantique ou orthographe):
//  SELECT * FROM ft_table WHERE MATCH(c3) AGAINST ('Starship' WITH QUERY EXPANSION) LIMIT 10;
// Un autre mode existe, IN NATURAL LANGUAGE permet de faire quelque chose de similaire:
//  SELECT * FROM ft_table WHERE MATCH(c3) AGAINST ('Starship' IN NATURAL LANGUAGE) LIMIT 10;
// Enfin, les deux peuvent être combinés
//  SELECT * FROM ft_table WHERE MATCH(c3) AGAINST ('Starship' IN NATURAL LANGUAGE WITH QUERY EXPANSION) LIMIT 10;
// 
//
//  SELECT COUNT(*) FROM ft_table WHERE MATCH(c3) AGAINST ('House, Representatives, Pennsylvania') LIMIT 10;  On prend les mots qui contiennent un de ces trois mots
//
// LE mode IN BOOLEAN MODE, permet d'affiner la recherche:
//  SELECT * FROM ft_table WHERE MATCH(c3) AGAINST ('Star*' IN BOOLEAN MODE) LIMIT 10;  On prend les 10 premiers qui contiennent des mots qui commencent par Star
//
//  SELECT * FROM ft_table WHERE MATCH(c3) AGAINST ('+House, +Representatives, +Pennsylvania' IN BOOLEAN MODE);  ON prend les elem qui contiennent ces trois mots là 
//
//  SELECT * FROM ft_table WHERE MATCH(c3) AGAINST ('+flying -fox* -squirrel* -frog*' IN BOOLEAN MODE) LIMIT 10;  On prends flying, mais on veut exclure ceux qui commencent par fox, squirrel ou frog
//
//  
//
// Si on veut qu'il soit possible de rechercher sur plusieurs colonnes à la fois, on peut utiliser 
//  ALTER TABLE goods ADD FULLTEXT(reference,short_descr,description);
//  SELECT reference, short_descr FROM goods WHERE MATCH(reference,short_descr,description) AGAINST ('harley');
//
// Utiliser une distance de Levenstein
//  SELECT * FROM produits WHERE LEVENSHTEIN_RATIO(nom, 'pomme') >= 0.7;


// le client écrit la requête: 
// fetch('/api/search?query=' + encodeURIComponent(query))
//     .then(response => response.json())
//     .then(data => {
//     })
//     .catch(error => {
//       console.error('Error searching:', error);
//     });


// renvoie le resultat de la recherche de recette
app.get('/search', async (req, res) => {

  const query = req.query.query;

  try {
    const recipesSearched = await makeRequest(
      'SELECT recipe_id FROM recipes WHERE MATCH(recipe_name, recipe_description) AGAINST('+'\''+query+ '\''+ ' IN NATURAL LANGUAGE MODE) LIMIT 20;',
      []
    );
    res.json(recipesSearched);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//renvoie le résultat de la recherche d'ingrédients
app.get('/search/ingredient', async (req, res) => {

  const query = req.query.query;

  try {
    const recipesSearched = await makeRequest(
      'SELECT ingredient_id FROM ingredients WHERE MATCH(ingredient_name) AGAINST('+'\''+query+ '\''+ ' IN NATURAL LANGUAGE MODE) LIMIT 20;',
      []
    );
    res.json(recipesSearched);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//renvoie le prix d'un ingrédient en fonction de son id
app.get('/getInfos/ingredient/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const ingredientPrice = await makeRequest(
      'SELECT * FROM ingredients WHERE ingredient_id = ?;',
      [id]
      );
      
      res.json(ingredientPrice);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
