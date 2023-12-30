
const db = require('../config/configuration')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')


module.exports = class{
    constructor(){
        this.db = db
        this.userModel = this.db.model('user');
        this.companyModel = this.db.model('company');
        this.projectModel = this.db.model('project');
        this.certificateModel = this.db.model('certificate');
    }
    async addUser(req, res){
        let user = await this.userModel.create({
            firstName:"Anwesha",
            lastName:"Chakraborty",
            email:"anweshachakraborty2021@gmail.com",
            designation:"Freelancing",
            skills:"Javascript, Node js, Postgresql, Php, Python, Sql, Mysql",
            description:"Javascript, Node js, Postgresql, Php, Python, Sql, Mysql",
            duration: "SEP 2018 - AUG 2019 · 11 mos",
            company:"Self Employeed · Full-time",
            position:"Freelancing",
            education:"MCA 2022(june)-2024(june)",
            university:"Chandigarh University",
            companyImage:"",
            image: "",
            licenceCertificate:""
        })
        user.dataValues.id
        delete user.dataValues.deletedAt
        res.json({
            user,
            "message":"user created successfully!!"
        })
    }
    async addCompany(req, res){
        let company = await this.companyModel.create({
            userId:18,
            company:"Self Employeed · Full-time",
            image:"",
            description:`5)All projects code are available in my github account.`
        })
        delete company.dataValues.id
        delete company.dataValues.deletedAt
        res.json({
            company,
            "message":"company created successfully!!"
        })
    }
    //https://www.youtube.com/watch?v=QdgwjIyFDwI&t=630s
    async getuser(req, res){
        
        let user = await this.userModel.findAll({
            include:[{
                model:this.companyModel
            }]
        })
        res.json({
            "message":"user find successfully!!",
            user:user,
            
        })
    }
    async addCerficate(req, res){
        let certificateobj = {
            company:"Udemy",
            name:`Coding Interview with datastructure and algorithm`,
            link:"https://udemy-certificate.s3.amazonaws.com/pdf/UC-40abf8a4-8b89-4638-89d7-79d892c508f4.pdf",
            image:"",
            description:""
        }
        let certificate = await this.certificateModel.create(certificateobj)
        res.json({
            "message":"user find successfully!!",
            certificate:certificate,
            
        })
    }
    async getCertificate(req, res){
        let certificate = await this.certificateModel.findAll({ });
        res.json({
            "message":"user find successfully!!",
            certificate:certificate,
            
        })
    }
    async addProject(req, res){
        let project = await this.projectModel.create({
            description:`Best food delivery app freelance services online. Outsource your food delivery app project and get it quickly done and delivered remotely online.
                         This is not for external use, only for college project and school project and for those who wanted to learn website development using
                         Node Js, React Js, Postgresql, javascript
                         `,
            projectDetails:`
                        Fully workable food delivery app which includes:
                        Misleneous:
                        1)system design of food delivery app in a ppt format
                        2)complete payment system by using razorpay
                        3)multiple category(by using recurssive function)
                        4)Database Design(multiple database joining by using sequelize query)
                        ...and lot more 
                        Product :
                        1)Multiple Product add/adding product/editing product/deleting product/view product/image upload
                        cart:
                        2)Multiple Product add to cart/adding cart/editing cart/deleting cart/view cart/image upload
                        wishlist:
                        3)Multiple Product add to wishlist/add wishlist/delete wishlist
                        productDetails:
                        4)Multiple Product add to cart/adding cart/editing cart/deleting cart/view cart/image upload
                    `,
            project_link:"",
            image:"/assets/img/ownportfolio.png",
            duration:"3-months",
            demo_video:"",
            name:"ownportfolio website"
        })
        res.json({
            "message":"user find successfully!!",
            project:project,
            
        })
    }
    async getProject(req, res){
        let project = await this.projectModel.findAll({})
        res.json({
            "message":"user find successfully!!",
            project:project,
            
        })
    }
    async projectDetails(req, res){
        let id = req.params['id']
        // console.log(id)
        let project = await this.projectModel.findOne({
            where:{
                uuidIdentifier:id
            }
        })
        res.json({
            project:project,
            
        })
    }
}
