const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const SellerModel = mongoose.Schema({
  name: {
    type: String,

  },
  employees: {
    type: Number,

  },
  companyName: {
    type: String
  },
  address: {
    type: String
  },
  Category: {
    type: String,

  },
  Area: {
    type: String,

  },
  cin: {
    type: String,

  },
  gst: {
    type: String,

  },

  mobile: {
    type: Number,

  },
  capacity: {
    type: Number,

  },
  linkedin: {
    type: String,

  },
  about: {
    type: String,

  },

  email: {
    type: String,

    validator: [validator.isEmail, "Please Enter the valid Email"]
  },
  password: {
    type: String,

  },
  role: {
    type: String,
    default: "seller"
  },
  profileAddress: [
    {
      type: String,
      name: String,
      mobile: Number,
      address: String
    }
  ],
  profileBank: [
    {
      name: String,
      ifsc: String,
      accountNo: Number,
      bankName: String,
      branchName: String,
      primary: Boolean
    }
  ],
  profileContact: [
    {
      name: String,
      role: String,
      mobile: Number,
      email: String
    }
  ],
  products: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'product',
      aprrove: {
        type: Boolean,
        default: null
      }
    }
  ],
  bids: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'order'
    }
  ]

})


SellerModel.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

// generate the token
SellerModel.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET_KEY)
  return token
}

// compare the password
SellerModel.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password)
}

//resetpassword token generate
SellerModel.methods.getresetToken = function () {
  const resettoken = crypto.randomBytes(20).toString('hex')
  this.resetpasswordToken = crypto.createHash('sha256')
    .update(resettoken)
    .digest('hex');
  this.resetPasswordExpires = Date.now() + 15 * 60 * 1000
  return resettoken
}




module.exports = mongoose.model('seller', SellerModel)