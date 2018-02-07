# Quasar App

> A Quasar project

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

don't forget our submodule of flags
in /skeleton/src/statics/region-flags
git@github.com:KinoKabaret/region-flags.git

this is what I did (make sure you are in the base directory of the repository)

```
git submodule add -b gh-pages git@github.com:KinoKabaret/region-flags.git skeleton/src/statics/region-flags
```
