const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const AdminModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Please Enter the valid Email"]
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    default: 'admin'
  },
  sellerReq: [
    {
      email:{
        type:String,
        required:true
      },
      mobile:{
        type:Number,
        length:10
      },
      companyName:{
        type:String
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  ],
  AddprodReq: [


    {
      seller: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'seller',
        required:true
      },

      product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'product',
        required:true
      }
    },

  ],
  NewprodReq:[{
    seller:{
      type: mongoose.SchemaTypes.ObjectId,
      ref:'seller',
      required:true
    },

    productName:{
      type:String,
    },
    Substance:{
      type:String,
    },
    CASNumber:{
      type:String,
    },
   ECNumber:{
      type:String,
    },
    MinPurity:{
      type:String,
    },
    Color:{
      type:String,
    },
    Apperance:{
      type:String,
    },
    Category:{
      type:String,
    },
    Proddecr:{
      type:String,
    },
    Synonyms:{
      type:String,
    }

  }]

})



AdminModel.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

// generate the token
AdminModel.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id , role:this.role}, process.env.JWT_SECRET_KEY)
  return token
}

// compare the password
AdminModel.methods.comparePassword = async function (enteredPassword) {

  return await bcrypt.compare(enteredPassword, this.password)
}

//resetpassword token generate
AdminModel.methods.getresetToken = function () {
  const resettoken = crypto.randomBytes(20).toString('hex')
  this.resetpasswordToken = crypto.createHash('sha256')
    .update(resettoken)
    .digest('hex');
  this.resetPasswordExpires = Date.now() + 15 * 60 * 1000
  return resettoken
}



module.exports = mongoose.model('admin', AdminModel)