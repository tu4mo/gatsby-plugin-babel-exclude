# gatsby-plugin-babel-exclude

A Gatsby plugin to exclude modules from babel-loader.

## Install

`npm install gatsby-plugin-babel-exclude`

## How to use

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-babel-exclude",
      options: {
        exclude: /someregex/,
      },
    },
  ],
};
```
