# Projet PACT - GF1 Application

Application GF1.

## Organisation des fichiers

Couleurs dans ./colors.js
Styles dans ./styles.js

Composants reutilisables par les autres pages :
./Components/Composant.js

Composant principal d'une page :
./Components/NomDeLaPage/NomDeLaPage.js

Composant utile dans une seule page :
./Components/NomDeLaPage/Composant.js

## Pour installer et run (Windows) :

### TLDR : 

Aller dans le dossier GF1-App et lancer les commandes suivantes :

npm install 
npm start

Si node affiche en dessous du qr code "› Metro waiting on http://localhost:8081" on peut tenter :

npx epxo start

Normalement il y aura une ip a la place localhost.

### En details

Les packages de node ne sont pas inclus dans le git parce que c'est beaucoup de fichiers inutiles a push a chaque commit.

Par contre node garde trace des packages du projet dans packages.json.
Quand on execute 'npm install' il va chercher les packages dans ce dossier.
Si jamais apres un pull l'appli ne marche plus, ca vaut le coup de relancer 'npm install' au cas ou quelqu'un ait installe un nouveau package.  