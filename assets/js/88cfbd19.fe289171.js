"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[935],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const o={title:"Optimizing the image size"},r=void 0,l={unversionedId:"part-3/section-4",id:"part-3/section-4",title:"Optimizing the image size",description:"A small image size has many advantages, firstly, it takes much less time to pull a small image from the registry. Another thing is the security: the bigger your image is the larger the surface area for an attack it has.",source:"@site/docs/part-3/section-4.md",sourceDirName:"part-3",slug:"/part-3/section-4",permalink:"/part-3/section-4",draft:!1,editUrl:"https://github.com/docker-hy/docker-hy.github.io/blob/master/docs/part-3/section-4.md",tags:[],version:"current",frontMatter:{title:"Optimizing the image size"},sidebar:"materialSidebar",previous:{title:"Using a non-root user",permalink:"/part-3/section-3"},next:{title:"Multi-host environments",permalink:"/part-3/section-5"}},s={},u=[{value:"Exercise 3.6",id:"exercise-36",level:2},{value:"Alpine Linux variant",id:"alpine-linux-variant",level:2},{value:"Exercise 3.7",id:"exercise-37",level:2},{value:"Multi-stage builds",id:"multi-stage-builds",level:2},{value:"Exercises 3.8 - 3.10",id:"exercises-38---310",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A small image size has many advantages, firstly, it takes much less time to pull a small image from the registry. Another thing is the security: the bigger your image is the larger the surface area for an attack it has."),(0,i.kt)("p",null,'The following tutorial to "Building Small Containers" from Google is an excellent video to showcase the importance of optimizing your Dockerfiles:'),(0,i.kt)("p",null,(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/wGz_cbtCiEA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("p",null,"Before going on to the tricks that were shown on the video, let us start start by reducing the number of layers. What actually is a layer? According to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/#how-does-a-docker-image-work"},"documentation"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To build your own image, you create a Dockerfile with a simple syntax for defining the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image. When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt. This is part of what makes images so lightweight, small, and fast, when compared to other virtualization.")),(0,i.kt)("p",null,"So each command that is executed to the base image, forms an layer. The resulting image is the final layer, that combines the changes that all the intrmediate layers contains. Each layer potentially adds something extra to the resulting image so it might be a good idea to minimize the number of layers."),(0,i.kt)("p",null,"To keep track of the improvements, we keep on note of the image size after each new Dockerfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\nWORKDIR /usr/videos\n\nENV LC_ALL=C.UTF-8\n\nRUN apt-get update\nRUN apt-get install -y curl python\nRUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl\nRUN chmod a+x /usr/local/bin/youtube-dl\nRUN useradd -m appuser\n\nUSER appuser\n\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"133MB")),(0,i.kt)("p",null,"As was said each command that is executed to the base image, forms an layer. Command here refers to one Dockerfile directice such as ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN"),". We could now glue all ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN")," commands together to reduce the number of layers that are created when building the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\nWORKDIR /usr/videos\n\nENV LC_ALL=C.UTF-8\n\nRUN apt-get update && apt-get install -y \\\n    curl python && \\\n    curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl && \\\n    chmod a+x /usr/local/bin/youtube-dl && \\\n    useradd -m appuser\n\nUSER appuser\n\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"133MB")),(0,i.kt)("p",null,"There is not that much difference, the image with less layers is 2 MB smaller."),(0,i.kt)("p",null,"As a sidenote not directly related to Docker: remember that if needed, it is possible to bind packages to versions with ",(0,i.kt)("inlineCode",{parentName:"p"},"curl=1.2.3")," - this will ensure that if the image is built at the later date the image is more likely to work as the versions are exact. On the other hand, the packages will be old and have security issues."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"docker image history")," we can see that our single ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN")," layer adds 76.7 megabytes to the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ docker image history youtube-dl\n\n  IMAGE          CREATED              CREATED BY                                      SIZE      COMMENT\n  f221975422c3   About a minute ago   /bin/sh -c #(nop)  ENTRYPOINT ["/usr/local/b\u2026   0B\n  940a7510dc5d   About a minute ago   /bin/sh -c #(nop)  USER appuser                 0B\n  31062eddb851   About a minute ago   /bin/sh -c apt-get update && apt-get install\u2026   76.7MB\n  ...\n')),(0,i.kt)("p",null,"The next step is to remove everything that is not needed in the final image. We don't need the apt source lists anymore, so we can glue the next line to our single ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},".. && \\\nrm -rf /var/lib/apt/lists/*\n")),(0,i.kt)("p",null,"Now, after we build, the size of the layer is 100 megabytes. We can optimize even further by removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),". We can remove ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," and all the dependencies it installed with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},".. && \\\napt-get purge -y --auto-remove curl && \\\nrm -rf /var/lib/apt/lists/*\n")),(0,i.kt)("p",null,"... which brings us down to 94 MB."),(0,i.kt)("h2",{id:"exercise-36"},"Exercise 3.6"),(0,i.kt)("admonition",{title:"Exercise 3.6",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Return now back to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-frontend"},"frontend")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-backend"},"backend")," Dockerfile."),(0,i.kt)("p",{parentName:"admonition"},"  Document both image sizes at this point, as was done in the material. Optimize the Dockerfiles of both app, frontend and backend, by joining the RUN commands and removing useless parts."),(0,i.kt)("p",{parentName:"admonition"},"  After your improvements document the image sizes again. The size difference may not be very much yet.")),(0,i.kt)("h2",{id:"alpine-linux-variant"},"Alpine Linux variant"),(0,i.kt)("p",null,"Our Ubuntu base image adds the most megabytes to our image. ",(0,i.kt)("a",{parentName:"p",href:"https://www.alpinelinux.org/"},"Alpine Linux")," provides a popular alternative base in ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/alpine/"},"https://hub.docker.com/_/alpine/")," that is around 4 megabytes. It's based on altenative glibc implementation musl and busybox binaries, so not all software run well (or at all) with it, but our container should run just fine. We'll create the following ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile.alpine")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:3.13\n\nWORKDIR /usr/videos\n\nENV LC_ALL=C.UTF-8\n\nRUN apk add --no-cache curl python3 ca-certificates && \\\n    curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl && \\\n    chmod a+x /usr/local/bin/youtube-dl && \\\n    apk del curl && \\\n    adduser -D userapp && \\\n    ln -s /usr/bin/python3 /usr/bin/python\n\nUSER userapp\n\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"51.7B")),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The package manager is ",(0,i.kt)("inlineCode",{parentName:"li"},"apk")," and it can work without downloading sources (caches) first with ",(0,i.kt)("inlineCode",{parentName:"li"},"--no-cache"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useradd")," is missing, but ",(0,i.kt)("inlineCode",{parentName:"li"},"adduser")," exists."),(0,i.kt)("li",{parentName:"ul"},"Most of the package names are the same - there's a good package browser at ",(0,i.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/packages"},"https://pkgs.alpinelinux.org/packages"),"."),(0,i.kt)("li",{parentName:"ul"},"The youtube-dl assumes that Python executable is called ",(0,i.kt)("inlineCode",{parentName:"li"},"python"),". When we installed the version 3 of Python, the executable is called ",(0,i.kt)("inlineCode",{parentName:"li"},"python3")," and that is why the last line of the RUN directive makes a ",(0,i.kt)("a",{parentName:"li",href:"https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/"},"symbolic link")," so that both names can be user to run Python")),(0,i.kt)("p",null,"Now when we build this file with ",(0,i.kt)("inlineCode",{parentName:"p"},":alpine-3.13")," as the tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ docker build -t youtube-dl:alpine-3.13 -f Dockerfile.alpine .\n")),(0,i.kt)("p",null,"It seems to run fine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ docker container run -v "$(pwd):/usr/videos" youtube-dl:alpine-3.13 https://imgur.com/JY5tHqr\n')),(0,i.kt)("p",null,"From the history we can see that the our single ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN")," layer size is 46.3MB"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ docker image history youtube-dl:alpine-3.13\n\n  IMAGE...\n  ...\n  14cfb0b531fb        20 seconds ago         /bin/sh -c apk add --no-cache curl python ca\u2026   46.3MB\n  ...\n\n  <missing>           3 weeks ago         /bin/sh -c #(nop) ADD file:093f0723fa46f6cdb\u2026   5.61MB\n")),(0,i.kt)("p",null,"So in total our Alpine variant is about 52 megabytes, significantly less than our Ubuntu based image."),(0,i.kt)("p",null,"Back in part 1 we published the Ubuntu version of youtube-dl with tag latest."),(0,i.kt)("p",null,"We can publish both variants without overriding the other by publishing them with a describing tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ docker image tag youtube-dl:alpine-3.13 <username>/youtube-dl:alpine-3.13\n$ docker image push <username>/youtube-dl:alpine-3.13\n")),(0,i.kt)("p",null,"OR, if we don't want to upkeep the Ubuntu version anymore we can replace our Ubuntu image by pushing this as the latest. Someone might depend on the image being Ubuntu though."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ docker image tag youtube-dl:alpine-3.13 <username>/youtube-dl\n$ docker image push <username>/youtube-dl\n")),(0,i.kt)("p",null,"Also remember that unless specified the ",(0,i.kt)("inlineCode",{parentName:"p"},":latest")," tag will always just refer to the latest image build & pushed - that can basically contain anything."),(0,i.kt)("h2",{id:"exercise-37"},"Exercise 3.7"),(0,i.kt)("admonition",{title:"Exercise 3.7",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  As you may have guessed, you shall now return back to the example frontend and backend."),(0,i.kt)("p",{parentName:"admonition"},"   Change the base image in FROM to something more suitable. Both should have at least Alpine variants ready in DockerHub. Make sure the application still works after the changes."),(0,i.kt)("p",{parentName:"admonition"},"  Document the size before and after your changes.")),(0,i.kt)("h2",{id:"multi-stage-builds"},"Multi-stage builds"),(0,i.kt)("p",null,"Multi-stage builds are useful when you need some tools just for the build but not for the execution of the image (that is for CMD or ENTRYPOINT). This is an easy way to reduce size in some cases."),(0,i.kt)("p",null,"Let's create a website with ",(0,i.kt)("a",{parentName:"p",href:"https://jekyllrb.com/"},"Jekyll"),", build the site for production and serve the static files with Nginx. Start by creating the recipe for Jekyll to build the site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ruby:3\n\nWORKDIR /usr/app\n\nRUN gem install jekyll\nRUN jekyll new .\nRUN jekyll build\n")),(0,i.kt)("p",null,"This creates a new Jekyll application and builds it. We are going to use Nginx to serve the site page but you can test how the site works if you add the following directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},"CMD bundle exec jekyll serve --host 0.0.0.0\n")),(0,i.kt)("p",null,"We could start thinking about optimizations at this point but instead we're going add a new FROM for Nginx, this is what resulting image will be. Then we will copy the built static files from the Ruby image to our Nginx image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# the  first stage needs to be given a name\nFROM ruby:3 as build-stage\nWORKDIR /usr/app\n\nRUN gem install jekyll\nRUN jekyll new .\nRUN jekyll build\n\n# we will now add a new stage\nFROM nginx:1.19-alpine\n\nCOPY --from=build-stage /usr/app/_site/ /usr/share/nginx/html\n")),(0,i.kt)("p",null,"Now Docker copies contents from the first image ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/app/_site/")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html")," Note the naming from Ruby to ",(0,i.kt)("em",{parentName:"p"},"build-stage"),". We could also use external image as a stage, ",(0,i.kt)("inlineCode",{parentName:"p"},"--from=python:3.7")," for example."),(0,i.kt)("p",null,"Let's build and check the size difference:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ docker build . -t jekyll\n$ docker image ls\n  REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n  jekyll              latest              5f8839505f37        37 seconds ago      109MB\n  ruby                latest              616c3cf5968b        28 hours ago        870MB\n")),(0,i.kt)("p",null,"As you can see, even though our Jekyll image needed Ruby during the build stage, its considerably smaller since it only has Nginx and the static files. ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container run -it -p 8080:80 jekyll")," also works as expected."),(0,i.kt)("p",null,"Often the best choice is to use a FROM ",(0,i.kt)("strong",{parentName:"p"},"scratch")," image as it doesn't have anything we don't explicitly add there, making it most secure option over time."),(0,i.kt)("h2",{id:"exercises-38---310"},"Exercises 3.8 - 3.10"),(0,i.kt)("admonition",{title:"Exercise 3.8: Multi-stage frontend",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Do now a multi-stage build for the example\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-frontend"},"frontend"),"."),(0,i.kt)("p",{parentName:"admonition"},"  Even though multi-stage builds are designed mostly for binaries in mind, we can leverage the benefits with our frontend project as having original source code with the final assets makes little sense. Build it with the\ninstructions in README and the built assets should be in ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,i.kt)("p",{parentName:"admonition"},"  You can still use the ",(0,i.kt)("inlineCode",{parentName:"p"},"serve")," to serve the static files or try out something else.")),(0,i.kt)("admonition",{title:"Exercise 3.9: Multi-stage backend",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Lets do a multi-stage build for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-backend"},"backend")," project since we've come so far with the application."),(0,i.kt)("p",{parentName:"admonition"},"  The project is in golang and building a binary that runs in a container, while straightforward, isn't exactly trivial. Use resources that you have available (Google, example projects) to build the binary and run it inside a container that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM scratch"),"."),(0,i.kt)("p",{parentName:"admonition"},"  To successfully complete the exercise the image must be smaller than ",(0,i.kt)("b",null,"25MB"),".")),(0,i.kt)("admonition",{title:"Exercise 3.10",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Do all or most of the optimizations from security to size for ",(0,i.kt)("strong",{parentName:"p"},"one"),' other Dockerfile you have access to, in your own project or for example the ones used in previous "standalone" exercises.'),(0,i.kt)("p",{parentName:"admonition"},"  Please document Dockerfiles both before and after.")))}d.isMDXComponent=!0}}]);