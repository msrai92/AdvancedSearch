# AdvancedSearchSPA
This Project is for a job application. The purpose is to allow user to search through a list of patients. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

Other technologies used where Bootstrap and Angualr Material. 

The project has a bug which is when you search for a user and limit for example D (the search goes by contains substring) it returns users with D in their name and limits it to for example 2. If the user does another search again for D and increases the limit it will add copies to the table. I did not have enough time to figure this out is as I am not as familiar with Angular, which made it a little difficult to figure out other bugs. One of these was angular not finding the local json file which was finally fixed from a source online by adding a few lines to tsconfig.json after the "lib" which were:

 "resolveJsonModule": true,
 "esModuleInterop": true,
 "allowSyntheticDefaultImports": true
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
