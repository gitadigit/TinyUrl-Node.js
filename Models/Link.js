import mongoose from "mongoose";



const ClickSchema=mongoose.Schema({
  
  insertedAt: {type: Date,required:false, default:Date.now()},
  ipAddress:{type:String,required:true,default:"0.0.0.0"}
})


const LinkSchema = mongoose.Schema({
  originalUrl: {type:String,required:true},
  clicks: [ClickSchema]
});

export default mongoose.model("links", LinkSchema);
