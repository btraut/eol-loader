Webpack EOL
====================

Simple [Webpack](http://webpack.github.io/) loader to to replace EOL characters with OS native.

###Example:

In your webpack config:

```javascript
{
    module: {
        loaders: [
            { loader: "webpack-eol" }
        ]
    }
};
```