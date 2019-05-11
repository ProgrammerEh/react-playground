export default {

    entry: './index.jsx',
    output: {
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }

};