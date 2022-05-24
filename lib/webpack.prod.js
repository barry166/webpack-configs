module.exports = {
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