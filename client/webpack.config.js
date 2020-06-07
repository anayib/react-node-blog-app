const HtmlWebPackPlugin = require("html-webpack-plugin"); // to add html webpack plug in which generates the bundled index.html
const path = require("path"); // needed if using path.resove() from node

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.html$/,
        use: { loader: "html-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./resources/imgs",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    proxy: [
      {
        context: ["/"], // the end point request that will trigger this proxy to function
        target: "http://localhost:8080", // what webpack dev server should prefix on our request
      },
    ],
    historyApiFallback: true,
  },
};
