'use strict';

// routes.js
var nextRoutes = require('next-routes');
var routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add('blog', '/blog');
// routes.add('reviews-home', '/reviews', 'reviews')
// routes.add('reviews-type', '/reviews/:type', 'reviews')
// routes.add('reviews-site', '/reviews/:type/:id', 'site')
// routes.add('about', '/about')