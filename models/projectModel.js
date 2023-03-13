// Need to replace to Firestore
const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
  "id" : 1,
  "name":"49 St Stephens Ave - Unit 14",
  "startDate":"16/01/2023",
  "GSTno":"133-514-384",
  "clientName":"Stephen Katz",
  "subContractFee":"0.1",
  "address":{
  "line1":"49 St Stephens ave",
  "suburb":"Parnell",
  "city":"Auckland"
  },
  
})

const Project = mongoose.mdel('Project', projectSchema)

module.exports = Project