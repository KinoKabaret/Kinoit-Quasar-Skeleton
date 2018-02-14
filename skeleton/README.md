[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

This is our testing ground for the entire userland base of the KINOÏT Platform. We are using the Quasar Framework which is a VUE.js based build system for web, Electron apps and includes porting via Cordova to Android and iOS. You might not see much in the master branch, because we are still testing many components, however we do send built projects to our other systems for integration, eg. with the front end website.


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

Don't forget our submodule of flags
in /skeleton/src/statics/region-flags
git@github.com:KinoKabaret/region-flags.git

FYI, this is what I did (make sure you are in the base directory of the repository)

```
git submodule add -b gh-pages git@github.com:KinoKabaret/region-flags.git skeleton/src/statics/region-flags
```
