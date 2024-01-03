const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config/.env" });

mongoose.set('strictQuery', true);

// const url=`mongodb+srv://nikhilraj:1234@cluster0.qd2v7cs.mongodb.net/`;

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex:true
// });

// const db = mongoose.connection;

// db.on(
//   "error",
//   console.error.bind(console.error, "Error in connecting to MongoDB")
// );

// db.once("open", function () {
//   console.log("Connected to Database :: Mongodb");
// });

// exports.module = db;

mongoose.connect("mongodb+srv://nikhilraj:1234@cluster0.qd2v7cs.mongodb.net/employee", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log('Connection successful');
}).catch((err)=>{
    throw err;
}) 
