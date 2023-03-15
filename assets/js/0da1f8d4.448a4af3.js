"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={title:"Containers in development"},i=void 0,s={unversionedId:"part-2/section-4",id:"part-2/section-4",title:"Containers in development",description:"Containers are not only great in production. They can be used in development environments as well and offer a number of benefits. The same works-on-my-machine problem is faced often when a new developer joins the team. Not to mention the headache of switching runtime versions or a local database!",source:"@site/docs/part-2/section-4.md",sourceDirName:"part-2",slug:"/part-2/section-4",permalink:"/part-2/section-4",draft:!1,editUrl:"https://github.com/docker-hy/docker-hy.github.io/blob/master/docs/part-2/section-4.md",tags:[],version:"current",frontMatter:{title:"Containers in development"},sidebar:"materialSidebar",previous:{title:"Volumes in action",permalink:"/part-2/section-3"},next:{title:"Summary",permalink:"/part-2/section-5"}},l={},p=[{value:"Exercise 2.11",id:"exercise-211",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Containers are not only great in production. They can be used in development environments as well and offer a number of benefits. The same ",(0,a.kt)("em",{parentName:"p"},"works-on-my-machine")," problem is faced often when a new developer joins the team. Not to mention the headache of switching runtime versions or a local database!"),(0,a.kt)("p",null,"For an example, a ",(0,a.kt)("a",{parentName:"p",href:"https://toska.dev/"},"software development team")," at the University of Helsinki has a fully ",(0,a.kt)("a",{parentName:"p",href:"https://ethesis.helsinki.fi/repository/handle/123456789/30995"},"containerized development environment"),". The principle in all development projects is to have a setup so that a new developer only needs to install Docker and clone the project code from GitHub to get started. Not a single dependency is ever installed on to host machine, Git, Docker and the text editor of choice is only thing that is needed."),(0,a.kt)("p",null,'Even if your application is not completely containerized during development, containers can very helpful. For example, say you need MongoDB version 4.0.22 installed in port 5656. It\'s now oneliner: "docker run -p 5656:27017 mongo:4.0.22" (MongoDB uses 27017 as default port).'),(0,a.kt)("p",null,"Let's containerize a NodeJS development environment. As you perhaps know ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS")," is a cross-platform JavaScript runtime that makes it possible to run JavaScript in your machine, servers and embedded devices, among many other platforms"),(0,a.kt)("p",null,"The setup requires some experteese on the way how NodeJS works. Here is a simplified explanation if you're not familiar: libraries are defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," and installed with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),". ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," is the Node package manager."),(0,a.kt)("p",null,"To run application with the packages we have script defined in package.json that instructs Node to execute index.js, the main/entry file in this case the script is executed with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),". The application already includes code to watch for changes in the filesystem and restart the application if any changes are detected."),(0,a.kt)("p",null,'The project "node-dev-env" is here ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/node-dev-env"},"https://github.com/docker-hy/material-applications/tree/main/node-dev-env"),". I already included a development Dockerfile and a helpful docker-compose.yml."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dockerfile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM node:16\n\nWORKDIR /usr/src/app\n\nCOPY package* ./\n\nRUN npm install\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"docker-compose.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\n\nservices:\n  node-dev-env:\n    build: . # Build with the Dockerfile here\n    command: npm start # Run npm start as the command\n    ports:\n      - 3000:3000 # The app uses port 3000 by default, publish it as 3000\n    volumes:\n      - ./:/usr/src/app # Let us modify the contents of the container locally\n      - node_modules:/usr/src/app/node_modules # A bit of node magic, this ensures the dependencies built for the image are not available locally.\n    container_name: node-dev-env # Container name for convenience\n\nvolumes: # This is required for the node_modules named volume\n  node_modules:\n")),(0,a.kt)("p",null,"And that's it. We'll use volume to copy all source code inside the volume so CMD will run the application we're developing. Let's try it!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$\xa0docker compose up\nCreating network "node-dev-env_default" with the default driver\nCreating volume "node-dev-env_node_modules" with default driver\nBuilding node-dev-env\nStep 1/4 : FROM node:14\n...\n\nAttaching to node-dev-env\nnode-dev-env    |\nnode-dev-env    | > dev-env@1.0.0 start /usr/src/app\nnode-dev-env    | > nodemon index.js\n...\n\nnode-dev-env    | App listening in port 3000\n')),(0,a.kt)("p",null,"Great! The initial start up is a bit slow. It is a lot faster now that the image is already built. We can rebuild the whole environment whenever we want with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose up --build"),"."),(0,a.kt)("p",null,"Let's see if the application works. Use browser to access ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),", it should do a simple plus calculation with the query params."),(0,a.kt)("p",null,"However, the calulation doesn't make sense! Let's fix the bug. I bet it's this line right here ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/blob/main/node-dev-env/index.js#L5"},"https://github.com/docker-hy/material-applications/blob/main/node-dev-env/index.js#L5")),(0,a.kt)("p",null,"When I change the line, on my host machine the application instantly notices that files have changed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"\u25b6 docker compose up\nStarting node-dev-env ... done\nAttaching to node-dev-env\nnode-dev-env    |\nnode-dev-env    | > dev-env@1.0.0 start /usr/src/app\nnode-dev-env    | > nodemon index.js\nnode-dev-env    |\nnode-dev-env    | [nodemon] 2.0.7\nnode-dev-env    | [nodemon] to restart at any time, enter `rs`\nnode-dev-env    | [nodemon] watching path(s): *.*\nnode-dev-env    | [nodemon] watching extensions: js,mjs,json\nnode-dev-env    | [nodemon] starting `node index.js`\nnode-dev-env    | App listening in port 3000\nnode-dev-env    | [nodemon] restarting due to changes...\nnode-dev-env    | [nodemon] starting `node index.js`\nnode-dev-env    | App listening in port 3000\n")),(0,a.kt)("p",null,"And now a page refresh shows that our code change fixed the issue. The development environment works."),(0,a.kt)("p",null,"The next exercise can be extremely easy or extremely hard. Feel free to have fun with it."),(0,a.kt)("h2",{id:"exercise-211"},"Exercise 2.11"),(0,a.kt)("admonition",{title:"Exercise 2.11",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  Select some of your own development projects and start utilizing containers in the development environment."),(0,a.kt)("p",{parentName:"admonition"},"  Explain what you have done. It can be anything, e.g., a support for docker-compose.yml to have services (such as databases) containerized or even a fully blown containerized development environment.")))}m.isMDXComponent=!0}}]);