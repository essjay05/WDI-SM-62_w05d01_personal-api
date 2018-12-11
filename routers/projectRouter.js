// REQUIRE IN CONTROLLER
const
    Project = require('../controllers/project'),
    express = require('express'),
    router = express.Router();

// ROUTES / PATHS
router.get('/', Project.index)
router.get('/:id', Project.show)
router.post('/', Project.create)
router.patch('/:id', Project.update)
router.delete('/:id', Project.destroy)

// CRUD STRETCH GOALS:
    // LIMIT PROJECT SEARCH TO 2:
    router.get('/?limit=2', Project.index2)

// MAKE EXPORTABLE
module.exports = router