const path = require("path");

module.exports = {
  watch: true,
  entry: ["./src/index.js", "./src/style.scss"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            options: { minimize: true },
            attrs: false
          }
        }
      }
    ]
  }
};
