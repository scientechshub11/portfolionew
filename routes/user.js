'use strict'
const express = require('express');
const router = express.Router();

// controller initialization
const userController = require('../controller/userController');
const userControllerObj = new userController()

router.get('/', (req,res)=>{userControllerObj.getuser(req, res)})
router.post('/', (req,res)=>{userControllerObj.addUser(req, res)})
router.post('/company', (req,res)=>{userControllerObj.addCompany(req, res)})
router.post('/project', (req,res)=>{userControllerObj.addProject(req, res)})
router.get('/project', (req,res)=>{userControllerObj.getProject(req, res)})
router.get('/project/:id', (req,res)=>{userControllerObj.projectDetails(req, res)})
router.get('/certificate', (req,res)=>{userControllerObj.getCertificate(req, res)})
router.post('/certificate', (req,res)=>{userControllerObj.addCerficate(req, res)})

module.exports = router;