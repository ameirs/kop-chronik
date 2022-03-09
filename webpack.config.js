const path = require("path");
// const dotenv = require("dotenv")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = () => ({
    mode: "production",
    
    entry: [
        "@babel/polyfill",
        path.join(__dirname, "client", "src", "styles/style.css"),
        path.join(__dirname, "client", "src", "start.js"),
    ],
    output: {
        path: path.join(__dirname, "client", "public"),
        filename: "bundle.js",
    },
    performance: {
        hints: false,
    },
    devServer: {
        static: path.join(__dirname, "client", "public"),
        proxy: {
            "/": {
                target: "http://localhost:3001",
            },
        },
        port: "3000",
    },
    // mode: "production",
    // optimization: {
    //     nodeEnv: "production",
    //     minimize: true,
    // },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "url-loader",
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
        new CompressionPlugin(),

        // new webpack.DefinePlugin({
        //     "process.env": JSON.stringify(process.env),
        // }),
    ],
});
