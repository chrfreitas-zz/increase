import path from 'path';

let config = {
    devtool: 'source-map',
    entry: './src/js/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config;
