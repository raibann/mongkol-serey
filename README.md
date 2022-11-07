# Tutorial - how to run this react app

1. run command on terminal to install nodemodule and other library

```
npm i --force

```

2. create file .env.local and copy text below to .env.local

```
REACT_APP_API_URL=https://mongkol-serey-backend.herokuapp.com
REACT_APP_PERSIST_KEY=MONGKOL_SEREY_KEY
REACT_APP_PERSIST_AUTH=MONGKOL_SEREY_AUTH
REACT_APP_PERSIST_VER=1

```

3. run command on terminal to start this app

```
npm start

```

4. run command for build to create development app (if you want to deploy it on server)

```
npm run build
```

# Project - structure

```
|-- node_module
|-- public
|   |-- font
|   |-- images
|   |-- favicon.ico
|   |-- index.html
|   |-- mainifest.json
|   |-- robots.txt
|-- src
|   |-- @types
|   |-- api
|   |-- components
|   |-- context
|   |-- geography
|   |-- hook
|   |-- layout
|   |-- pages
|   |-- routes
|   |-- theme
|   |-- utils
|   |-- App.css
|   |-- App.test.tsx
|   |-- Index.css
|   |-- react-app-env.d.ts
|   |-- reportWebVitals.ts
|   |-- setupTest.ts
|-- .env.example
|-- .env.local
|-- .gitignore
|-- .gitpod.yml
|-- .prettierrc
|-- app.js
|-- package-lock.json
|-- package.json
|-- README.md
|-- tsconfig.json

```
