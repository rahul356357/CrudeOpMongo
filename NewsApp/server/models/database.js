
var mongoose = require('mongoose');<!--require the moongoose orm-->
var Schema = mongoose.Schema,
            ObjectId = Schema.ObjectId;<!--create an object schema method of moongoose orm-->



 var userSchema=new Schema({
   username:String,
   password:String
 });<!--created a schema to define the document schema in database -->

var user=mongoose.model('user',userSchema);<!--created a model profile having a particular Schema -->
 module.exports=user;<!--routed to app.js to fetch data or define values over there -->
