const express = require('express')
const projectController = require('./../controllers/projectController')

const router = express.Router()

//router.param
router.route('/projects')
  .get( projectController.getAllProjects )
  .post( projectController.createProject )
router.route('/projects/id')
  .get( projectController.getProject)
  .patch( projectController.updateProject)
  .delete( projectController.deleteProject)
// router.routes('/id/labour')
//   .get( projectController.getProjectLabour)
//   .post( projectController.getProjectLabour)
//   .patch( projectController.updateProject)

module.exports = router
