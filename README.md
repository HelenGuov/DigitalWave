###Installation### 
1. npm init 
2. install webpack for build and web pack-dev-server for run  
npm install webpack webpack-dev-server
3. install babel into development dependencies 
npm install --save-dev babel-core babel-loader
npm install --sve-dev babel-preset-es2015 babel-preset-react 
4. install html-webpack-plugin, this adds the output script into the index.html which uses by browsers 
npm install --save-dev html-webpack-plugin
5. install react and reactDom
npm install --save react
npm install --save react-dom

###Configuration### 
5. webpack.config.js - add html webpack plugin as below: 
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin(
    {
        template: __dirname + 'app/index.html',
        filename: 'index.html',
        inject: 'body',
    }
)
6. .babelrc - make a file '.babelrc' and addd following code
{
  "presets": ["react", "es2015"]
} 
7. package.json - modify "scripts" object as below: 
"scripts": {
    "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
    "build": "node ./node_modules/webpack/bin/webpack.js",
  },
8. Make ./src/index.js 
9. webpack.config.js - further config how webpack uses babel to transpile scripts 
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
}
10. Add some code inside your entry script ./src/index.js 
11. In package.json - change "main" as below:
  "main": "webpack.config.js",
 
###Install package###
If you pull for the first time, run code below, to make sure that all dependencies are installed
npm install

###Build  Or Run###
Build: npm run build
Run: npm start



