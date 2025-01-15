const mongoose = require("mongoose");
require('dotenv').config()

// async function dbConnect() {
//     mongoose
//     .connect(
//         process.env.DB_URL,
//       {
//         //   these are options to ensure that the connection is done properly
//         useNewUrlParser: true,
//         // useUnifiedTopology: true,
//         // useCreateIndex: true,
//       }
//     ).then(() => {
//         console.log("Successfully connected to MongoDB Atlas!");
//       })
//       .catch((error) => {
//         console.log("Unable to connect to MongoDB Atlas!");
//         console.error(error);
//       });
// }

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://ambitiousbhavi:E0vaauxSOOL0BSPB@cluster19.mv4ukep.mongodb.net/cluster19?retryWrites=true&w=majority&appName=Cluster19");
        if (conn) {
            console.log("Successfully connected to MongoDB Atlas!");
        }
    } catch (error) {
        console.log("Error occured", error)
    }
}

module.exports = dbConnect;