const { merge } = require('webpack-merge');
const dev = require('./webpack.config.dev');
const base = require('./webpack.config.base');
const prd = require('./webpack.config.prd');

const config = process.env.NODE_ENV === 'production' ? prd : dev;

module.exports = merge(base, config);
