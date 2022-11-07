# Project - Build by :

1. ReactJs with typescript
2. React material ui
3. Other library in package.json file

# Tutorial - how to run this react app :

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

# Project - structure :

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

# Project - Details :

1. node_module is directory save all file libraries
2. public is global file directory
3. scr is directory for develop project
4. @types is use for create all type
5. api is use for connect api to server
6. component is use for create customize component
7. context is use for controll state as global
8. geography is directory keep Cambodia's geography file json
9. hook is use for create global function to use everywhere
10. layout is component for prepare layout web page
11. pages is web page
12. routes is use control all pages that we want to go
13. theme is use for setup default color font style and more...
14. utils is use for create mock data for use everywhere that we nedd
15. App.css and Index.css is file style css
16. App.test.tsx is file for test react app but we never use it
17. react-app-env.d.ts is type of react-app-env
18. reportWebVitals.ts is built-in tool for measuring the real life performance of app.
19. setupTest.ts is setup file for initializing enzyme.
20. .env.example and .env.local is environment variables (more [https://create-react-app.dev/docs/adding-custom-environment-variables])
21. .gitignore is use for disable file we don't want to push
22. .gitpod.yml is use for update code online use with gitpod
23. .prettierrc is use for format code when we build it
24. app.js is use for run build directory when hosting
25. package.json and package-lock.json is list library name
26. README.md is policy and tutorail
27. tsconfig.json is file for config app and something
