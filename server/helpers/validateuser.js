const Joi = require('joi')

// const customeMsg={
//   "string.base": `"username" should be a type of 'text'`,
//   "string.empty": `"username" cannot be an empty field`,
//   "any.required": `"username" is a required.`,
// }

const customName={
  'string.empty':'Complete Name Required',
  'any.required':'Complete Name Required'
}

const customEmail = {
  'string.email': 'Invalid Email Address',
  'string.empty': 'Email cannot be empty',
  'any.required': 'Email is required', 
};

const customPassword={
  'string.empty': 'Password cannot be empty',
  'any.required': 'Password is required', 
}


const authSchemaOrg = Joi.object({
  fname:Joi.string().required().messages(customName),
  lname:Joi.string().required().messages(customName),
  dob:Joi.string().required(),
  type:Joi.string().required(),
  gender:Joi.string().required(),
  country:Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase().required().messages(customEmail),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages(customPassword),
  cpassword: Joi.ref('password'),
})


const authSchemaFan = Joi.object({
  name:Joi.string().required(),
  gender:Joi.string().required(),
  country:Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
})

module.exports = {
  authSchemaOrg,
  authSchemaFan
}