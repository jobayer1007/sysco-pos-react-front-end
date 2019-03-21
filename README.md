# Sysco Point of Sales System - React Redux

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/60a251d380c4409886cae792b72b659e)](https://www.codacy.com/app/blog.padmal/sysco-pos-react-front-end?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CloudyPadmal/sysco-pos-react-front-end&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.com/CloudyPadmal/sysco-pos-react-front-end.svg?branch=development-redux)](https://travis-ci.com/CloudyPadmal/sysco-pos-react-front-end)
[![codecov](https://codecov.io/gh/CloudyPadmal/sysco-pos-react-front-end/branch/development-redux/graph/badge.svg)](https://codecov.io/gh/CloudyPadmal/sysco-pos-react-front-end)
![GitHub Release Date](https://img.shields.io/github/release-date/CloudyPadmal/sysco-pos-react-front-end.svg)
![Website](https://img.shields.io/website/https/sysco-pos-system.herokuapp.com.svg?down_color=lightgrey&down_message=offline&up_color=green&up_message=online)
![GitHub repo size in bytes](https://img.shields.io/github/repo-size/CloudyPadmal/sysco-pos-react-front-end.svg)
![Repo description](https://img.shields.io/badge/endpoint-frontend-blueviolet.svg)

This repository contains front end implementation of PoS system using react native with redux fully integrated for state management. Source code is developed using ReactJS with Redux in VSCode IDE. There are three branches maintained in this project.

- `development-redux` branch containing source code under development using redux
- `development-pure` branch containing source code under development using react native with manual state control
- `deployment` hosting branch in Heroku. Pushes to this branch will deploy the content in the hosted website

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [VSCode](https://code.visualstudio.com/download)
- [React](https://facebook.github.io/react-native/docs/getting-started.html)
- [NodeJS & npm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)

### Installing

Configuring the project in your own workstation is easy. First, make sure the prerequisites tools and libraries are installed. Clone the project and install dependencies using `npm install` command. Once all the dependencies are set, go to root folder and run `npm start`. It will display on which port the application has started and a link to access the web site.

## Running the tests

API is fully integrated with unit testing plus component testing and it covers almost 95% of source code. Tests can be run using the following command on the whole project. Codacy is integrated to measure code quality and coverage. Required keys for codacy is in Travis build system and therefore ignore all the warnings generated by codacy in a local build.

```bash
$ npm test
```

## Deployment

This site is already hosted in a free Heroku platform using free dynos. There might be slight delays to start up the app due to the use of free dynos. In order to deploy your own version of this app, please follow deployment instructions provided in Heroku. URL for the hosted website is [](). The backend is developed seperately and it can be found in a GitHub repository: [sysco-pos-nodejs-server](https://github.com/CloudyPadmal/sysco-pos-nodejs-server) along with the documentation in [swaggerhub](https://app.swaggerhub.com/apis-docs/CloudyPadmal/Sysco-POS/1.0.3)

## Maintainer

- [Padmal](https://github.com/CloudyPadmal)