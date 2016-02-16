eol-loader for Webpack
====================

Simple [Webpack](http://webpack.github.io/) loader to replace all EOL characters with os.EOL, the platform-appropriate EOL character.

###Example:

In your webpack config:

```javascript
{
    module: {
        loaders: [
            { loader: "eol-loader" }
        ]
    }
};
```