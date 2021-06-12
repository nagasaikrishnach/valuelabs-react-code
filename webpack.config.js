const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('HTML-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const options = {
    name: '[path][name].[ext]'
};
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    // we can multiple entry points
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            //Tells Webpack how to modify files before its added to dependency graph.
            //JavaScript modules(functions) that takes the source file, and returns it in a [modified] state
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     outputPath: 'css',
                        //     name: '[name].[ext]'
                        // }
                    },
                    //style-loader: Chained after css-loader, dynamically inject CSS into the document as style tags.
                    // {
                    //     loader: 'style-loader',
                    //     options: { injectType: 'styleTag' } 
                    // },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     name: '[path][name].[ext]'
                        // }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            //The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
            //If you have multiple webpack entry points, they will all be included with <script> tags in the generated HTML
            { template: path.join(__dirname, '/src/index.html')}
        ),
        new MiniCssExtractPlugin({
            //This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
            filename: '[name].css',
            chunkFilename: "[id].css"
        }),
    ],
    devServer: {
        historyApiFallback: true
    }
};