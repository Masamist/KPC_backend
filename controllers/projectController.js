const { db } = require('./../firebase.js')
const { collection, getDocs } = require('firebase-admin/firestore')

// collection ref
const colRef = db.collection('projects')

// Get all project method
exports.getAllProjects = async (req, res) => {
    const projects = await db.getDocs(colRef).then((snapshot) => {
      console.log(snapshot.docs);
    })
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data:{
        projects
      }
    }) 
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
    const newProject = req.body
    const projectRef = db.collection('project')
    const resp = await projectRef.set({
      newProject
    })
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