module.exports = {
    entry: './src/app.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'build/app.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@components': __dirname + '/src/components',
        '@atoms': __dirname + '/src/components/atoms',
        '@molecules': __dirname+ '/src/components/molecules',
        '@organisms': __dirname+ '/src/components/organisms',
        '@templates': __dirname+ '/src/components/templates',
        '@apps': __dirname+ '/src/components/apps',
        '@styles': __dirname+ '/src/styles',
        '@services': __dirname+ '/src/services',
        '@redux': __dirname+ '/src/services/redux',
        }
    },
    module: {
      rules: [
        { 
            test: /\.tsx?$/, 
            loader: 'ts-loader' 
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
      ]
    }
  }