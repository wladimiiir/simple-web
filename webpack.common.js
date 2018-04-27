const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    output: {
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
        minimizer: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.template.ejs",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].[chunkhash].css"
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
};
