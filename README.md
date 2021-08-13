# myMovies-client_angular
 Client side for myMovies App built with Angular

### Objective:
- Build a web application that provides users with access to information about different movies, genres, directors. Users can register, update their information, deregister and create a list of "Favorites".

### User Stories:
- As a user, I want to be able to receive information on movies, genres, directors and actors of the 1980s so that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to have a "Favorites" list and a "To Watch" list, and add and remove movies from them.
- As a user, I want to access a simple web application with a minimalist interface, displaying only essential information.
- As a user, I want to be able to create a profile so I can save data about my favorite movies.
- As a user, I want to be able to update my personal data.
- As a user, I want to be able to deregister my profile from the web application database.

### Key Features:
- Return a list of movies of the 80's to the user.
- Return data about a single movie by title to the user.
- Return data about movie genres to the user.
- Return data about directors and actors to the user.
- Allow new users to register.
- Allow users to update their data by username.
- Allow existing users to deregister by username.
- Allow users to add and remove movies to their "Favorites" list by movie ID.
- Allow users to add and remove movies to their "To Watch" list by movie ID.
- Secure access to the API data: authentication and authorization with HTTP and JSON Web Token.

## Built With
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [GitHub Pages](https://pages.github.com/)
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Dependencies
- @angular

### Dev Dependencies
- angular-cli-ghpages
- eslint
- jasmine-core
- karma
- typedoc
- typescript

## Get Started
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload.

### Creating components
Run `ng generate component component-name` to generate a new component.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Server-side
Using the RESTful API created in movie_api

