const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");

module.exports = merge(common, {
    devtool: "hidden-source-map",
    module: {
        rules: [
            {
                test: /\.[s]?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, "./src")]
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin("dist"),
        new CopyWebpackPlugin([{
            from: "public",
            to: ".",
            ignore: ".gitkeep"
        }]),
        new DotenvPlugin({
            path: "./.env.production"
        })
    ]
});
