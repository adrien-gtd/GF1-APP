import React from 'react';

const data = {
  "name": "Tartiflette",
  "description": "Un plat traditionnel des Alpes françaises fait de pommes de terre, de fromage et de bacon.",
  "image": require("./tartiflette.jpg"),
  "ecoPrice": 2,
  "moneyPrice": 1,
  "ingredients": [
    "Pommes de terre",
    "Reblochon",
    "Lardons",
    "Oignon",
    "Ail",
    "Crème Fraîche",
    "Vin Blanc"
  ],
  "instructions": [
    "Pelez et coupez les pommes de terre en fines rondelles.",
    "Faites frire le bacon dans une poêle jusqu'à ce qu'il soit croustillant, puis mettez-le de côté.",
    "Hachez l'oignon et l'ail et faites-les revenir dans la même poêle jusqu'à ce qu'ils soient tendres.",
    "Dans un grand plat allant au four, disposez les couches de pommes de terre, de bacon, d'oignon et de mélange d'ail, et de fromage.",
    "Versez la crème fraîche et le vin blanc sur le plat.",
    "Assaisonnez avec du sel et du poivre selon le goût.",
    "Enfournez au four à 180°C pendant 25-30 minutes ou jusqu'à ce que le fromage soit fondu et mousseux.",
    "Servez chaud."
  ]
}

export default data;