import mongoose from "mongoose";

const uriLocal = "mongodb://localhost:27017/TinyUrlDB";

const connectDB = async () => {
  await mongoose.connect(uriLocal);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

mongoose.set("toJSON", {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id;
    },
  });

export default connectDB;