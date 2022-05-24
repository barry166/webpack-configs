const {merge} = require("webpack-merge");
const baseConfig = require('./webpack.base')

const projectRoot = process.cwd()

const prodConfig = {
    mode: "production",
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: 'vendors',
                    chunks: 'all',
                    minChunks: 2,
                },
                react: {
                    test: /(react|react-dom)/,
                    name: 'react-vendors',
                    chunks: "all"
                }
            },
        },
    },
}

module.exports = merge(baseConfig, prodConfig)