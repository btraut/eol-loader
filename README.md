eol-loader
====================

eol-loader, inspired by [gulp-eol](https://github.com/fritx/gulp-eol), is a [webpack](http://webpack.github.io/) loader that serves two purposes:

1. It replaces all end of line characters with the appropriate EOL character for your platform, as determined by os.EOL.
2. It adds a newline to the end of files that lack one.

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

For more information on how to configure loaders, visit [webpack's documentation](https://webpack.github.io/docs/loaders.html).