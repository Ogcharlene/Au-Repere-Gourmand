# Au-Repere-Gourmand
Test Technique pour IRIS Prévention

Project Overview:

Ce projet à été crée dans le cadre d'un test technique pour le processus de recrutement de IRIS Prévention, entreprise pour laquelle je suis en liste pour un poste de développeuse Front-end en alternance.
J'ai choisi le projet Front numéro 2 : Une page de réservation d'un restaurant.
Le site/restaurant s'appelle "Au Repère Gourmand".

Dans ce README je vais énuméré les choses que j'ai pu réalisé en 4 heures de temps (capture d'écran à l'appui) et ce que j'ai effectué après les 4 heures de test.

![screenTest4h](https://github.com/user-attachments/assets/2d024e66-3562-4d1c-9bdc-847741f800f7)


Features:

En premier plan, nous pouvons voir la facade du restaurant en bannière dans le header, suivi du titre et de la barre de navigation qui, au clique, nous amène à l'endroit en question sur le site.
- "Qui sommes nous ?" nous avons : Gallerie de photos (propriétaires, interieur du restaurant, matériels utilisés... etc) et un carousel qui présente le concept du restaurant (3 slides).
- "La carte" : carousel de toute la carte, de l'entrée jusqu'au dessert avec la possibilité de la télécharger juste en dessous.
- "Réservez une table" : form de reservation d'une table avec en input : Nom, Prénom, Mail, Date de réservation, Heure de réservation et le nombre de personne.


Tech Stack:

-Next.js: Un framework gratuit et open source s'appuyant sur la bibliothèque JavaScript React.

-Typescript: Un langage de programmation typé qui s'appuie sur JavaScript.

-TailwindCSS: Un framework qui nous permetde personnaliser totalement et simplement le design de nos application ou de nos site web.

-ShadCN UI: Une bibliothèque de composants UI open source qui fournit un ensemble de composants React de haute qualité et personnalisables.

-Lucide-React: Pour sa bibliothèque d'îcones.


    Installation & Setup :

- Avoir Node.js d'installé :
```sh
sudo apt install nodejs
```

Steps to Set Up Locally:

- Cloner le Repository :
```sh
git@github.com:Ogcharlene/Au-Repere-Gourmand.git
cd Au-Repere-Gourmand
```

- Installer les dependances:

Serveur:
```sh
npm install
```
Installer/créer une App Next.js:
```sh
npx create-next-app@latest nom-du-projet --typescript
```

Installer TailwindCSS:
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Installer sur dans le dossier du projet ShadCN UI:
```sh
npm install shadcn-ui
```


- Ouvrir le dossier sur VS Code:
```sh
code .
```

- Run le serveur:
```sh
npm run dev
```
Ouvrir le projet à l'adresse : " http://localhost:3000 "





