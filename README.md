# `timeout-app` — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS][angularjs] web app. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the `timeout-app` repository and install the dependencies:

### Prerequisites

You need git to clone the `timeout-app` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and start `timeout-app`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `timeout-test-app`

Clone the `timeout-test-app` repository using git:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`timeout-app` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    goOut.routes.js              --> the controller logic
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  assets/
    images/
    style/
        app.css               --> default stylesheet
    
```




