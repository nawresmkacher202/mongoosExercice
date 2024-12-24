const express=require('express')
const { adduser ,getAllStudents} = require('../controllers/userController')
 const userRoutes=express.Router()
// Ajout =>POST
userRoutes.post('/addUser',adduser)
userRoutes.get('/getStudents',getAllStudents)
//insertMany
userRoutes.get('/Students',userController.getAllStudents)
module.exports = userRoutes





































