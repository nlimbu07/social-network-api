const router = require('express').Router();
const userRoutes = require('./users-routes');
const thoughtRoutes = require('./thoughts-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);
// add prefix of `/thoughts` to routes created in `thought-routes.js`
router.use('/thoughts', thoughtRoutes);

module.exports = router;
