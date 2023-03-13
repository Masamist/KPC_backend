const Project = require('./../models/playlistModel')

// Get all project method
exports.getAllProject = async (req, res) => {
  try{
    const projects = await Project.find(req.query)
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data:{
        projects
      }
    }) 
  } catch(err) {
    res.status(404).jason({
      status:'fail',
      message:err
    })
  }
}

// Get a single project method
exports.getProject = async (req, res) => {
  try{
    const project = await Project.findById(req.param.id)

    res.status(200).json({
      status: 'success',
      data:{
        project
      }
    })
  }catch(err) {
    res.status(404).json({
      status:'fail',
      message: err
    })
  }
}

// Create a new project Method
exports.createProject = async (req, res) => {
  try{
    const newProject = await Project.create(req.body)

    res.status(201).json({
      status:'created',
      data:{
        newProject
      }
    })
  }catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

// Update a project method
exports.updateProject = async(req, res) => {
  try{
    const project = await Project.findByIdUpdate(req.param.id, req.body, {
      new: true,
      renValidations: true
    })
    res.status(200).json({
      status:'updated',
      data: {project}
    })
  }catch(err){
    res.status(404).json({
      statsu:'fail',
      message: err
    })
  }
}

// Delete a project method
exports.deleteProject = async(req, res) => {
  try{
    await Project.findBuIdDelete(req.param.id)
    res.status(204).json({
      statsu:'deleted',
      data: null
    })
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}