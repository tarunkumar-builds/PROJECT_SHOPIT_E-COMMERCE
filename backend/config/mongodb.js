import mongoose from "mongoose";

const cachedConnection = globalThis.mongooseConnection || {
    connection: null,
    promise: null,
};

globalThis.mongooseConnection = cachedConnection;

const connectDB = async () =>{
    if (cachedConnection.connection) {
        return cachedConnection.connection;
    }

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not defined");
    }

    if (!cachedConnection.promise) {
        cachedConnection.promise = mongoose.connect(process.env.MONGODB_URL).then((mongooseInstance) => {
            console.log("DB Connected");
            return mongooseInstance;
        });
    }

    cachedConnection.connection = await cachedConnection.promise;
    return cachedConnection.connection;
}

export default connectDB;
