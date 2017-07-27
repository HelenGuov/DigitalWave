var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin(
    {
        template: __dirname + '/src/index.html',
        filename: 'index.html',
        inject: 'body'
    }
)

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('bin'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    { loader: 'file-loader' },
                { loader: 'file-loader', options: { limit: 10000 } }
            ],
            }
            // { test: /\.css$/, loader: 'style-loader!css-loader'}, 
            // { test: /\.css$/, loader: 'css-loader', exclude: /mode_modules/,
            //     query: {
            //         modules: true,
            //         localIdentName: '[name]__[local]___[hash:base64:5]'
            //     }
            // }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}