<h3 align="center"> 
  Angular Random Chart Generator
</h3>

<h4 align="center">
  <a href="https://angular-random-chart-generator.vercel.app/">View Demo</a>
</h4>

---

<img src="https://user-images.githubusercontent.com/4216651/112336145-2aa67300-8d00-11eb-9c4f-860c6da0b019.png" alt="chart-introduction" width="100%"/>

|                                                                             List                                                                             |                                                                           Write                                                                           |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/4216651/112343734-c0dd9780-8d06-11eb-9aa7-eab70a4ff555.gif" alt="randomlist-introduction" width="700" /> | <img src="https://user-images.githubusercontent.com/4216651/112344228-3ba6b280-8d07-11eb-91ed-2efe7e509576.gif" alt="generate-introduction" width="690"/> |

## About The Project

This project is a documentation of study for `Angular` and `Chart.js`.

<p>
  <img src="https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=Angular&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=Chart.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Lodash-3492FF?style=flat-square&logo=Lodash&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/>
</p>

### Built With

- Angular
- TypeScript
- SCSS
- PrimeNG
- Chart.js
- lodash
- Yarn
- Docker

## Getting Started

### Prerequisites

- Before you start, install `Yarn` package to global.

  ```sh
  npm install --global yarn
  ```

- Docker install required

  https://www.docker.com/get-started

### Installation

#### Local

1.  Clone the repo

    ```sh
    git clone https://github.com/VannsKang/Angular-Random-Chart-Generator.git
    ```

2.  Install NPM packages

    ```sh
    yarn install
    ```

3.  Run the project

    ```sh
    yarn start
    ```

4.  Build the package

    ```sh
    yarn build
    ```

#### Docker

1.  Run the Docker inside `./docker` folder

    ```sh
    docker-compose up
    ```

## Introduction

1.  The `/` page lists each chart title

2.  The `/memo` page generates a chart randomly by entering the title and content

3.  `/room/:id` `id` is a random, non-duplicate `string`, each displaying a detail page of the list

4.  The title and contents of the main screen list uses `API` of `https://jsonplaceholder.typicode.com/`

### Page Details

### `/`

- Click `ADD RANDOM CHART` in the upper left corner to go to `/memo` writing page
- Clicking on the corresponding list will take you to `/memo/:id` to display the details of the corresponding chart
- I put an Easter-egg feature on the title button
- Titles and contents of the existing list are randomly selected by `sort` by requesting `API` through `AJAX` through `https://jsonplaceholder.typicode.com/`, and the number and internal contents are also randomly determined

### `/memo`

- After entering text in the title and content, click `GENERATE` to create a chart post
- `Validation` is applied
- Click the 'BACK' button in the upper left to move to `/`

### `/memo/:id`

- The first `body` displays the title and content
- The second `body` will generate a random chart
- The chart type, key, and value are all randomly determined
- Click the 'BACK' button in the upper left to move to `/`

#### Chart List

- `bar`, `doughnut`, `pie`, `line`, `radar`, `polarArea`

<img src="https://user-images.githubusercontent.com/4216651/112339792-570fbe80-8d03-11eb-9f0a-a6e22ad6ea25.png" alt="chart-list" width="100%"/>

## Project Tree

```js
.
├── dist
├── e2e
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── details/
│   │   │   │   ├── details.component.html
│   │   │   │   ├── details.component.scss
│   │   │   │   ├── details.component.spec.ts
│   │   │   │   └── details.component.ts
│   │   │   ├── list/
│   │   │   │   ├── list.component.html
│   │   │   │   ├── list.component.scss
│   │   │   │   ├── list.component.spec.ts
│   │   │   │   └── list.component.ts
│   │   │   ├── memo/
│   │   │   │   ├── memo.component.html
│   │   │   │   ├── memo.component.scss
│   │   │   │   ├── memo.component.spec.ts
│   │   │   │   └── memo.component.ts
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.spec.ts
│   │   │   └── app.component.ts
│   │   ├── routes/
│   │   │   ├── app-routing.module.ts
│   │   │   ├── customs-routing.module.ts
│   │   │   └── index.ts
│   │   ├── scss/
│   │   │   └── mixin.scss
│   │   ├── service/
│   │   │   ├── data/
│   │   │   │   ├── data.service.ts
│   │   │   │   └── data.service.spec.ts
│   │   │   ├── list/
│   │   │   │   ├── list.service.ts
│   │   │   │   └── list.service.spec.ts
│   │   │   ├── memo/
│   │   │   │   ├── memo.service.ts
│   │   │   │   └── memo.service.spec.ts
│   │   │   └── index.ts
│   │   ├── typings/
│   │   │   └── index.ts
│   │   ├── app.module.ts
│   │   └── customs.modulde.ts
│   ├── assets
│   ├── environments
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── .browserslistrc
├── .editorconfig
├── angular.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

1. Manage the modules `details`, `list` and `memo` in `app/components/`

2. `app/layout/` manages the `app` module

3. In `app/routes/`, `/` pages are routed with `app-routing` and `lazy routing loading` is applied to the rest of the pages through `customs-routing`

4. `app/scss` manages a common `mixin`

5. In `app/service/`, service logic is managed with `data`, `list` and `memo` modules

6. Manage types in `app/typings/`

7. Manage modules in `app/app.module.ts` and `app/customs.module.ts`

## NPM Packages

#### packages

```
dependencies:
@angular/animations 13.2.6
@angular/common 13.2.6
@angular/compiler 13.2.6
@angular/core 13.2.6
@angular/forms 13.2.6
@angular/platform-browser 13.2.6
@angular/platform-browser-dynamic 13.2.6
@angular/router 13.2.6
chart.js 3.7.1
lodash 4.17.21
primeicons 5.0.0
primeng 13.2.1
rxjs 7.5.5
tslib 2.3.1
zone.js 0.11.5

devDependencies:
@angular-devkit/build-angular 13.2.6  jasmine-core 4.0.1
@angular/cdk 13.2.6                   karma 6.3.17
@angular/cli 13.2.6                   karma-chrome-launcher 3.1.1
@angular/compiler-cli 13.2.6          karma-coverage 2.1.1
@types/jasmine 3.10.3                 karma-jasmine 4.0.1
@types/lodash 4.14.180                karma-jasmine-html-reporter 1.7.0
@types/node 12.20.47                  typescript 4.5.5
```

1. Setting up the project through `Angular CLI`.
2. Design was applied through `primeng` and `chart.js`
3. Some of logics are simply implemented by `lodash`

## ETC

This project is optimized & tested in `Chrome`.

---

<h3 align="center">
Developed by SOOM
</h3>

<h4 align="center">
<a href="https://www.soomlog.tech/">Soomlog.tech</a>
</h4>
