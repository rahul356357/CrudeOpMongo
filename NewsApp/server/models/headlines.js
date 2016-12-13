
var mongoose = require('mongoose');<!--require the moongoose orm-->
var Schema = mongoose.Schema,
            ObjectId = Schema.ObjectId;<!--create an object schema method of moongoose orm-->

 var userSchema=new Schema({
   headline:String,
   comment:String,
  data:String

 });<!--created a schema to define the document schema in database -->

var news=mongoose.model('news',userSchema);<!--created a model profile having a particular Schema -->
 module.exports=news;<!--routed to app.js to fetch data or define values over there -->
