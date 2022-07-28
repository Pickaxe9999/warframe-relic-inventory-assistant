const router = require('express').Router();

//api routes
const relicRoutes = require('./relics-routes');


//allow router to use routes
router.use('/relics', relicRoutes);

module.exports = router;