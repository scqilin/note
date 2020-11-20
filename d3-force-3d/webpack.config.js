
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.ts',
        about:'./src/about.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            title: 'TypeScriptWebpack'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about'],
            title: 'about'
        })
    ],
    // devtool:'inlin-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 9000
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },{
                test:/\.css$/,
                use:[{
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                }] 
            }
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    }, 
}