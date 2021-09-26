[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)
# Contacts page

_Educational Angular project_

Contacts page helps to better organize personal contacts.
Future improvements: CRUD, web-server, DB.

## Task

- Create Angular project with these concepts:
    - components
    - styling
    - structural directives
    - routing
    - data binding
    - pipes
- Requirements:
    - create few components with routing between them
    - components must look estetic, tidy layout (custom css or bootstrap/ng-bootstrap/ng-materialize or other libraries)
    - meaningful header and footer components
    - navigation in header or sidebar
    - code represented in git repository (+README.md)
    - \* custom services / custom pipes are optional.

## Folder structure

```
src
├── app
│   ├── components
│   |  ├── about                // 'About page'
|   │  |  ├── app.component.css
|   │  |  ├── app.component.html
|   │  |  ├── app.component.spec.ts
|   │  |  └── app.component.ts  // same file structure in all components
│   |  ├── app                  // general layout / <router-outlet>
│   |  ├── footer
│   |  ├── header
│   |  ├── person-details       // 'Add/Edit' page
|   |  └── persons-list         // 'Contacts' main page
│   ├── models
│   |  ├── Person.ts
|   │  └── PersonClass.ts
│   ├── pipes
│   |  ├── capitalize-first.pipe.ts
|   │  └── to-space.pipe.ts
│   ├── services
│   |  ├── persons-list.service.spec.ts
|   │  └── persons-list.service.ts
│   └── app.module.ts
├── assets
│   └── angular.png
├── environments
│   ├── environments.prod.ts
│   └── environments.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.css
└── test.ts
 ```
## Deployment procedure:
```
git clone https://github.com/GedasPupa/Persons.git
Packages:     npm install
Launch:       ng serve -o
Build:        ng build

```

## Teacher

[Mindaugas Bernatavičius](https://github.com/MindaugasBernatavicius)
