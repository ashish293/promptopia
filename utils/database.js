import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", true);
		if (isConnected) {
			console.log("=> using existing database connection");
			return Promise.resolve();
		} else {
			console.log("=> using new database connection");
			const db = await mongoose.connect(process.env.MONGODB_URI, {
				dbName: process.env.MONGODB_DB_NAME,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			isConnected = true;
			console.log("=> database connected");
		}
	} catch (error) {
		console.error(error);
	}
};

export { connectDB };
