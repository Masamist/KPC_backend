const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviseAccount = require('./creds-kpc.json')

initializeApp({
  credential: cert(serviseAccount)
})

const db = getFirestore
module.exports = { db }