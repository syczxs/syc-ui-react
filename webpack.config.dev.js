const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        example: './views/example/example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './views/example/example.html'
        })
    ],
})