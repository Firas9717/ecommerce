const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose= require('mongoose')
AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  branding: {
    companyName: 'firas Admin dashboard',
  },
  dashboard: {
    handler: async () => {

    },
}})
const ADMIN ={
    email:'firas@gmail.com',
    password:'1234'
}
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    cookieName:'adminbro',
   cookiePassword:'secret',
   authenticate: async (email,password)=>{console.log('debug')
       if(email===ADMIN.email&& password===ADMIN.password){
           return ADMIN}
    return null
   }
})
module.exports=router