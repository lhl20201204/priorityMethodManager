const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
   mode:"development",
   entry:resolve(__dirname,"src/index.js"),
   output:{
      path: resolve(__dirname,"bundle"),
      filename:"index.js"
   },
   experiments: {
    topLevelAwait: true
  },
   module:{
        rules:[
            {
                test:/.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    plugins: ['@babel/plugin-syntax-top-level-await'],
                  }
                }
                
            }
        ]
   },
   plugins:[
       new HtmlWebpackPlugin({
           template:resolve(__dirname,"index.html")
       })
   ],
   devServer:{
       port:4444
   }

}