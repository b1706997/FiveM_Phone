var path = require('path')
module.exports = {
    entry: './src/app.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'build/app.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        "@components": path.resolve(__dirname, 'src/components/'),
        "@atoms": path.resolve(__dirname, 'src/components/atoms/'),
        "@molecules": path.resolve(__dirname, 'src/components/molecules/'),
        "@organisms": path.resolve(__dirname, 'src/components/organisms/'),
        "@templates": path.resolve(__dirname, 'src/components/templates/'),
        "@app": path.resolve(__dirname, 'src/app/'),
      }
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    }
  }