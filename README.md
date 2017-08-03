# Protractor - Page Objects Starter Code

The goal of this repo is to provide a starting template for a new protractor project using page objects. 

## Installation:

##### Requirements: 

To use protractor you must have [Node.JS](www.https://nodejs.org/en/) installed.

##### Setup

Either download the ZIP of this repo or clone: \
`git clone url`

Then navigate to the folder: \
`cd protractor starter code`

Now you can download all the neccessary modules: \
`npm install`

Lastly you will need to install the webdriver required: \
`npm run prestart-webdriver`

If needed, you can manually declare the proxy by adding the following to `package.json` on line 11: \
`--proxy=proxyurl@yourwork.com` \
You may also need to disable SSL \
`--disable_ssl`

## Run Test Suites/Cases
You will need open two terminal windows. \
In one run: \
`npm run start-webdriver`\
This will run a selenium web server, you will need to keep this terminal window open.

In the other window you can run your tests: \
`npm run *suitename*`

suitename = name listed under suites object in `conf.js` on line 19.
