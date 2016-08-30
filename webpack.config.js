var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path')
const sassLoaders = [
 'css-loader',
 'sass-loader'
]
module.exports = {
    // The standard entry point and output config
    entry: {
        main: "./main.js",
    },
    output: {
        filename: "./assets/[name].js",
        chunkFilename: "./assets/[id].js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader",sassLoaders.join('!'))
            }
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("./bundle.css", {
            allChunks: true
        })

    ]
}