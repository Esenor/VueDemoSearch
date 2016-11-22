# ![VueDemoSearch](https://cdn-images-1.medium.com/fit/c/60/60/1*yeAO-nwsAqnzr7k-zoDkoQ.png) VueDemoSearch

## Liens utiles ##

[Guide](https://vuejs.org/v2/guide/)

[API](https://vuejs.org/v2/api/)

[Examples](https://vuejs.org/v2/examples/)

## Installation ##

1. Build Docker image `docker-compose -f docker/docker-compose_dev.yml build`
2. Up docker container `docker-compose -f docker/docker-compose_dev.yml up -d`

--------------------------

## How to use ##

### NPM CLI ###

> Inside the container

--------------------------

#### Add a Component ####

> Add an empty component and a spec unit test

    npm run add-component ComponentName
    
This command add the following files:
  
- /src/components/ComponentName.vue
- /test/unit/ComponentName.spec.js

--------------------------

#### Add a Widget ####

> Add an empty widget and spec unit test

    npm run add-widget WidgetName
      
This command add the following files:
    
- /src/components/widgets/WidgetName.vue
- /test/unit/WidgetName.spec.js

--------------------------

#### Build the project ####

> Run webpack build project

    npm run build
      
Add compiled files in `/dist`

--------------------------

#### Run unit test in console ####

    npm run unit

--------------------------

#### Run unit test in Junit file ####

    npm run testJunit

Junit file in:
        
- /test/test-results.xml
