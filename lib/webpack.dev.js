const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require("path");

const projectRoot = process.cwd()

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        static: {
          directory: path.join(projectRoot, './dist')
        },
        hot: true,
    }
})