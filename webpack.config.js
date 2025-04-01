const path = require('path');

module.exports = {
  mode: 'development', // Use 'production' for production builds
  entry: {
    frontend: './frontend/src/index.js', // Update this to the correct path
    admin: './admin/src/index.js'        // Update this to the correct path
  },
  output: {
    filename: '[name].bundle.js',  // [name] will output frontend.bundle.js, admin.bundle.js
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json'],
  }
};
