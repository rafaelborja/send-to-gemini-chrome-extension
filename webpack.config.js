const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/background.js', // Adjust based on your entry JS file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'background.js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/manifest.json', to: '.' },
                { from: 'src/images', to: 'images' },
                { from: 'src/contentScript.js', to: '.' }, // Copy contentScript.js as is
            ],
        }),
    ],
};
