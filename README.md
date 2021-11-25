# Zeller Coding Challenge Front End



## Reference

### (1) Style

It supports both global CSS & CSS modules. Global CSS is imported in `Index.tsx`. Webpack packs CSS into JS file and it doesn't create cass file.

`yarn cssExtractBuild` will create a separate CSS file.

### (2) Font

Font will be imported by file-loader into dist folder when it is specified in `font-face`. In this case, we have `font-face` in `global.css` as below. Webpack will grab font file into the `font` folder in `dist` and transform the url to `fonts/Lato-Regular.ttf`.

### (3) index.html

`html-webpack-plugin` will add script tag with react bundle name and move to `dist` from `public`.

```scss
@font-face {
  font-family: 'Lato';
  src: url('../../public/fonts/Lato/Lato-Regular.ttf') format('truetype');
}
```


## Todo

Check if enzyme-adapter-react-17 is official...

```bash
# enzyme-adapter-react-17 is not availble yet...
# when it is updated 
yarn add enzyme-adapter-react-16 @types/enzyme-adapter-react-16 --dev
# for now, use unofficial one
yarn add @wojtekmaj/enzyme-adapter-react-17 --dev

```

Create type from the graphql response manually - not sure how to codegen

```json
{"data":{"listZellerCustomers":{"items":[{"email":"lynn@gmail.com","id":"f47813cf-0482-4326-afc9-12f53218ed06","name":"Lynn Warr","role":"MANAGER"},{"email":"david@gmail.com","id":"73bae2af-4fa4-4023-8829-1034604e7590","name":"David Miller","role":"ADMIN"},{"email":"ryan@gmail.com","id":"0c90ecd4-d159-4335-9377-f29ee6829847","name":"Ryan Muller","role":"ADMIN"},{"email":"joe@gmail.com","id":"edc033b9-ba6c-4857-9ff9-85c52ad39ef9","name":"Joe Perera","role":"MANAGER"},{"email":"cris@gmail.com","id":"24d34832-7c10-4c91-a582-32a0222125c0","name":"Chris Miller","role":"ADMIN"}]}}}

```
