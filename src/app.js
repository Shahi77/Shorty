import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import urlRouter from "./routes/url.routes.js";
import userRouter from "./routes/user.routes.js";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use("/url", urlRouter);
app.use("/user", userRouter);
export default app;
