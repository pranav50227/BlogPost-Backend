const mongoose = require('mongoose') ;
const EmailValidator = require('email-validator') ;

const userSchema = mongoose.Schema({
    Username : {
        type : String ,
        required : true 
    },
    email : {
        type : String , 
        required : true ,
        unique : true ,
        validate : function(){
            return EmailValidator.validate(this.email);
        }
    } ,
    password : {
        type : String , 
        required : true ,
        minLength : 8 ,
        
    } ,
    isVerified : {
        type : Boolean ,
        default : false
    } ,
    verificationToken : String
});

const userModel = mongoose.model('userModel' , userSchema) ;
module.exports = userModel ;
