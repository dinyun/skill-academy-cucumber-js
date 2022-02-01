
### Skill Academy by Ruangguru Automauted Testing Tool

This repository contains a testing project for running UI & API testing on https://skillacademy.com/

### Installation

This project is tested on **Node v12.18.4** and above. While earlier versions of node may be compatible, but they have not been verified.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally.

`JDK 1.8:` It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.

### Selenium

To run your test you must have selenium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` and `services: ['appium']` in the *.conf.js.  That's all there is to it.!.

### Run Some Sample Tests

before running the test, make sure all dependencies have been installed by running

`npm install`

To execute the entire test suite in local development, you can run the command below

`npm run test-local`

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files can be found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli. 
