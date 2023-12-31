const express = require('express');
const { createorder, getallorders, getsingleorder, adminupdates, buyerupdates, sellerupdates, getallquoate, getquote, addminaccepted, addminrejected } = require('../controller/OrderContoller');
const { isAutharization, isAdmin, isSeller, autherizesrole } = require('../middleware/auth');

const app = express.Router()



// all routes

const CreateOrder = app.post('/new/order', isAutharization ,autherizesrole('buyer', 'admin') , createorder)
const GetAllOrder = app.get('/getall/orders',getallorders)
const GetSingleOrder = app.get('/order/:id',getsingleorder)
const AdminUpdates = app.put('/updates/order/admin', isAutharization,autherizesrole('admin') ,adminupdates)
const BuyerUpdates = app.put('/updates/order/buyer',  isAutharization, buyerupdates)
const SellerUpdates = app.put('/updates/order/seller', isAutharization , autherizesrole('seller', 'admin') , sellerupdates)
const GetAllQuotes = app.get('/:id/quotes', isAutharization , autherizesrole('admin') , getallquoate )
const GetQuote = app.get('/:order/:id', isAutharization , autherizesrole('admin') , getquote )
const AdminAccepted = app.put('/admin/accept/:id',isAutharization , autherizesrole('admin'),addminaccepted)
const AdminRejected = app.put('/admin/reject/:id',isAutharization , autherizesrole('admin'),addminrejected)




module.exports = { CreateOrder , GetAllOrder , GetSingleOrder , AdminUpdates , SellerUpdates , BuyerUpdates , GetAllQuotes , GetQuote , AdminAccepted ,AdminRejected}
