const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "eval-source-map",
  //   devServer: {
  //     static: [
  //       {
  //         directory: path.join(__dirname),
  //       },
  //     ],
  open: true,
  // // Other devServer options...
  // historyApiFallback: true,
  // static: "./",
  // publicPath: "/dist/",
  //   },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
