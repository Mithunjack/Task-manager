import mongoose  from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongoDB")
    }

    catch(error){
        console.log(error)
    }

    
    // const db = mongoose.connection;
    
    // db.on("error", console.error.bind(console, "connection error:"));
    // db.once("open", () => console.log("MongoDB connected!"));
}

export default connectMongoDB;