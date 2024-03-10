const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://harshit:jyeZvRA5dgSyCMDA@cluster0.ao4jlp5.mongodb.net/Signup');

const Userschema = new mongoose.Schema({ 
    username: String, 
    email : String,
    password: String,

});
const loginSchema = new mongoose.Schema({ 
    email : String,
    password: String,

});

const PaymentSchema = new mongoose.Schema({
    username : String,
    cardNumber : String,
    cvv : String,
    billing : String,
})
const Signup = mongoose.model('Signup', Userschema);
const Login =  mongoose.model('Login',loginSchema)
const Payment = mongoose.model('Payment',PaymentSchema)
module.exports ={
    Signup,
    Login,
    Payment,
}