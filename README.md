# Zeller Coding Challenge Front End ✨

## (1) Get Started

Make sure to use Node version 14.

1. Start the main app

```bash
yarn install
yarn start
```

2. Start the design system

```bash
cd frontend-component
yarn install
yarn storybook
```



## Reference

### (1) Style

It supports both global CSS & CSS modules. Global CSS is imported in `Index.tsx`. Webpack packs CSS into JS file and it doesn't create css file.

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

