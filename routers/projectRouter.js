// REQUIRE IN CONTROLLER
const
    Project = require('../controllers/project'),
    express = require('express'),
    router = express.Router();

// ROUTES / PATHS
router.get('/', Project.index)
// router.get('/:id', Project.show)
router.post('/', Project.create)
// router.patch('/:id', Project.update)
// router.delete('/:id', Project.destroy)

// MAKE EXPORTABLE
module.exports = router