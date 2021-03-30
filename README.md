# vue-for-docker-v2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## For Docker 

### Build the image
```
docker build -t nginx-vue-v2-ts .
```
### Run the container
```
docker run -p 8080:80 nginx-vue-v2-ts
```
### Browse the application [at](http://localhost:8080/)


