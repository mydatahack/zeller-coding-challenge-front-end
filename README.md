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


Ref 

font-family

```css
body {
  font-family: 'InterZellerRegular', Arial, Helvetica, sans-serif;
}
```

for the title

```css
title {
  color: #000;
  font-family: InterZeller-SemiBold;
  font-weight: 600;
  font-size: 26px;
}
```
text

```css
p {
  font-size: 18px;
  line-height: 1.55;
}
```

zeller color 

Button blue
```css
.color {
  background-color: #0071ce 
}
```


more css 

```css
    body{
      font-family:'InterZeller',arial,sans-serif;
      font-weight:500;
      line-height:1.4;
      color:var(--brand0);
      background-color:var(--lightgray)
    }body .body-wrapper{background-color:#fff}
    h1,.h1{
      font-family:'InterZeller',arial,sans-serif;
      font-weight:600;
      font-size:2rem;
      color:var(--brand0)}
      
    h2,.h2{
      font-family:'InterZeller',arial,sans-serif;
      font-weight:600;
      font-size:1.277777rem;
      font-size:1.5rem;
      color:var(--brand0)}
      
      h3,.h3{font-family:'InterZeller',arial,sans-serif;
        font-weight:600;
        font-size:1.166666rem;
        color:var(--brand0)}
        h4,.h4{font-family:'InterZeller',arial,sans-serif;font-weight:500;font-size:.888888rem;color:var(--brand0)}
        p{font-size:1rem}
        @media(min-width:1024px){.h0{font-size:3.555555rem;line-height:1.1}
        h1,.h1{font-size:2.555555rem;letter-spacing:-0.02em;line-height:1.15}
        h2,.h2{font-size:1.777777rem;line-height:1.2}
        h3,.h3{font-size:1.333333rem;line-height:1.2}
        h4,.h4{font-size:1rem;line-height:1.4}
        p{font-size:.888888rem;line-height:1.4}li{font-size:.888888rem}}
        
        @media(max-width:576px){
          p,li{
            font-size:.875rem
          }}
          .atmc-btn{
            font-size:1rem;font-weight:600 !important;border-width:1px
          }
          .atmc-btn:hover{
            color:var(--base) !important;background-color:transparent !important;border-color:var(--base) !important;transform:none}
            .atmc-btn-primary{
              padding-top:.5rem;padding-bottom:.5rem;background-color:#0071ce !important;border:1px solid #0071ce !important}
              .atmc-btn.atmc-btn-link:hover{color:var(--base) !important}.atmc-btn-link:hover path{stroke:var(--base) !important}
              @media(min-width:2000px){.body-wrapper{max-width:3300px;margin:auto}}@media(min-width:768px) and (max-width:991px){.z-sim-features{padding-left:20px !important;padding-right:20px !important}.z-sim-features .icon-box-02_repeater{-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}.z-sim-pricing{padding-top:100px !important;padding-bottom:100px !important}}@media(max-width:767px){.atmc-btn{min-width:6.5rem}}.z-counter .atmc-counter_number,.z-counter .atmc-counter-04_content{color:#f7976e}.z-form .hs-form .field input{background-color:#f2f2f2;border-color:#f2f2f2}.z-form .hs-form .hs-button{background-color:#0071ce !important;border-color:#0071ce !important}.z-feature{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.z-heading{margin-bottom:0}.z-simple-link{display:inline-flex;align-items:center;color:var(--base) !important}.z-simple-link:after{content:"";display:inline-block;width:16px;height:14px;background-image:url('https://f.hubspotusercontent10.net/hubfs/7176560/Zeller_2020/icons/arrow.png');background-size:contain;background-repeat:no-repeat;background-position:center;margin-left:.5rem;transition:.2s ease}.z-simple-link:hover:after{-webkit-transform:translateX(5px);-ms-transform:translateX(5px);transform:translateX(5px)}.z-content h1,.z-content h2,.z-content h3,.z-content h4,.z-content h5,.z-content h6{margin-bottom:.75em}.z-content .h1{margin-bottom:1rem}.z-content p{margin-bottom:1.11em}.z-content p:last-child{margin-bottom:0}.z-content ol{margin-top:0;padding-left:1.25rem}.z-content ol li::marker{color:#0071ce}.z-content .atmc-intro{margin-bottom:0}.z-content .atmc-intro p{font-size:1rem}.atmc-list-numbered-01.z-list li{font-weight:600}.atmc-list-numbered-01.z-list .atmc-list-numbered-01_number{font-weight:400;color:#0071ce}.z-list .atmc-list-03_icon>svg{display:none}.z-list .atmc-list-03_icon:after{content:"";display:block;width:20px;height:20px;background-image:url('https://f.hubspotusercontent10.net/hubfs/7176560/Zeller_2020/icons/tick-primary.png');background-size:contain;background-repeat:no-repeat;background-position:center}@media(min-width:1024px){.h0{font-size:3.555555rem;line-height:1.1}h1,.h1{font-size:2.555555rem;line-height:1.15}h2,.h2{font-size:1.777777rem;line-height:1.2}h3,.h3{font-size:1.333333rem;line-height:1.2}h4,.h4{font-size:1rem;line-height:1.4}p{font-size:.888888rem;line-height:1.4}li{font-size:.888888rem}}@media(max-width:1023px){.h0{font-size:32px;line-height:normal}h1,.h1{font-size:32px;line-height:normal}h2,.h2{font-size:24px;line-height:1.2}h3,.h3{font-size:21px;line-height:1.2}h4,.h4{font-size:16px;line-height:1.4}p{font-size:14px;line-height:1.4}li{font-size:14px}}.blog-01-content h2{font-weight:normal;letter-spacing:-0.02em}@media(min-width:1024px){.blog-01-content h2{font-size:2.555555rem;line-height:1.15}}@media(max-width:1023px){.blog-01-content h2{font-size:32px;line-height:normal}}

```
