const Sequelize = require('sequelize')
require('dotenv').config()

// MODELS
const userModel = require('../model/user');
const serviceModel = require('../model/service');
const projectModel = require('../model/project');
const companyModel = require('../model/company');
const certificateModel = require('../model/certificate');

// Sequelize Connection
//console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 1,
        acquire: 30000,
        idle: 10000
    },
    logging: false
})



// INITIALIZE MODELS

userModel(sequelize, Sequelize)
companyModel(sequelize, Sequelize)
serviceModel(sequelize, Sequelize)
projectModel(sequelize, Sequelize)
certificateModel(sequelize, Sequelize)

module.exports = sequelize;