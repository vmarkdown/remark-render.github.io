const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        'main': path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'text-loader'
            }
        ]
    },
    externals: {
        'vremark-plugin-katex': 'vremarkPluginKatex'
    },
    plugins: [

    ]
};