import mongoose from "mongoose";

function initDB() {
    if(mongoose.connections[0].readystate){
        console.log("Already connected to Database")
        return
        //this if statement checks if we are already connected to db, then we dont run the code after this
    }
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("connected to Database"))
    .catch((error) => console.log(error.message));
}

export default initDB
