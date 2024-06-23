import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import urlRouter from "./routes/url.routes";

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
export default app;
