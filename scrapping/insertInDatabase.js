/////////////////////////////////////////////////////////////////////////////////////
////// Ce fichier donne des exemples d'utilisation de la base de donnée /////////////
////////// La base de donnée est stockée sur un serveur Maria DB ////////////////////
/////////////////////////////////////////////////////////////////////////////////////
import connectionData from './dataBaseConfig.js'; 
import * as mysql from 'mysql2';
import * as readline from 'readline'
import * as fs from 'fs'


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


// envoie la requête à la base de données
const makeRequest = async (request, param) => {
  return new Promise((resolve, reject) => {
    con.execute(request, param, (err, results) => {
      if (err) {
        console.error('Error executing the query: ' + param + err.stack);
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

// Create a readline interface for reading the file line by line
const rl1 = readline.createInterface({
    input: fs.createReadStream('data/dataRecipe.jsonl')
});

const rl2 = readline.createInterface({
  input: fs.createReadStream('data/dataIngredients.jsonl')
});

// Event listener for reading each line of the file
rl2.on('line', async (line) => {
    // Parse the JSON object from the line
    const data = JSON.parse(line);
    
    await makeRequest("INSERT INTO ingredients (ingredient_name, co2_per_unit, price_per_unit, unit) VALUES (?, ?, ?, ?);",[data.ingredient_name, data.co2, data.price, data.unit]);
});

rl1.on('line', async (line) => {
  // Parse the JSON object from the line
  const data = JSON.parse(line);

  await makeRequest("INSERT INTO recipes (recipe_name, recipe_description,image_uri) VALUES (?, ?,?)", [data.titre, data.instructions, data.image])

  try {
    const recipe_id = await makeRequest("SELECT recipe_id FROM recipes WHERE recipe_name = ?;", [data.titre])
    for (var i = 0; i < data.ingredients.length;i++) {
      const ingredient_id = await makeRequest("SELECT ingredient_id FROM ingredients WHERE ingredient_name = ?;", [data.ingredients[i].ingredient_name])
      if (data.ingredients[i].ingredient_quantity !== null) {
        await makeRequest("INSERT INTO ingredients_list (recipe_id, ingredient_id, quantity) VALUES (?, ?, ?)", [recipe_id[0].recipe_id, ingredient_id[0].ingredient_id, data.ingredients[i].ingredient_quantity])
      } else {
        console.log("quantité nulle")
      }
    console.log("ok")
    }
  } catch (err) {
    console.log(err)
    console.log(data)
  }
});



