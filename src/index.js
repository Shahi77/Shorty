import app from "./app.js";
import connectDb from "./db/connect.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.error("\n Error while connecting to the server:", error);
      throw error;
    });

    app.listen(port, () => {
      console.log("\nserver connected on port: ", port);
    });
  })
  .catch((error) => {
    console.error("\nMongoDB connection failed:", error);
  });
