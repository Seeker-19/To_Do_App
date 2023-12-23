import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendapi",
    })
    .then(() => console.log("connected"))
    .catch((e) => console.log(e));
};
