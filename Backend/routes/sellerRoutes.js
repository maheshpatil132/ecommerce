const express = require('express');
const { createseller, updateseller, signuprequest, loginseller, deleteseller, addrequest, sellerquote, getsingleseller, getallsellerquote, getsellers, newproduct } = require('../controller/SellerController');
const { isAutharization, autherizesrole, isAdmin, isSeller } = require('../middleware/auth');
const app = express.Router()



// seller Routes
const CreateSeller = app.post('/new/seller', isAutharization,autherizesrole('admin'), createseller)
const UpdateSeller = app.put('/update/seller/:id',isAutharization, autherizesrole('seller','admin') , updateseller)
const LoginSeller = app.post('/login/seller', loginseller)
const DeleteSeller = app.post('/delete/seller/:id', isAutharization,autherizesrole('admin') ,deleteseller)
const AddProdRequest = app.post('/addprod/:id', isAutharization, autherizesrole('seller', 'admin'), addrequest)
const Getsingleseller = app.get("/seller/:id",isAutharization, autherizesrole('seller','admin') , getsingleseller)
const GetAllseller = app.get("/getall/sellers" ,isAutharization, autherizesrole('seller','admin'), getsellers)
const SendCreateReq = app.post('/send/createreq' , signuprequest)
const Sellerquote = app.put("/seller/quote/:id", isAutharization,autherizesrole('seller', 'admin'), sellerquote)
const Getallsellerquote = app.get('/get/enquries',isAutharization ,autherizesrole('seller', 'admin') , getallsellerquote)
// seller sign up request
const SignUpSeller = app.put('/request/signup', signuprequest)
const NewProduct = app.put('/request/new/product', isAutharization , autherizesrole('seller', 'admin') , newproduct) 




module.exports = { CreateSeller, SignUpSeller, LoginSeller, DeleteSeller, AddProdRequest, Sellerquote, Getsingleseller, Getallsellerquote , GetAllseller , SendCreateReq ,UpdateSeller , NewProduct}