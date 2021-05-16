import mongoose from "mongoose";

function initDB() {
    
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
