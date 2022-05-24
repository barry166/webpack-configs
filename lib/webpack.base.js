const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const projectRoot = process.cwd()

module.exports = {
    entry: path.resolve(projectRoot, '../src/index.js'),
    output: {
        filename: "[name]_[chunkhash:8].js",
        path: path.resolve(projectRoot, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            },
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|jepg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
                generator: {
                    filename: 'images/[name].[hash:6][ext]',
                },
            },
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(projectRoot, '../public/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].chunk.css',
        }),
    ]
}