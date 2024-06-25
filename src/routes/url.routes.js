import { Router } from "express";
import {
  handleGenerateShortUrl,
  handleGetAnalytics,
  handleGetUrls,
  handleVisitUrl,
} from "../controllers/url.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { verify } from "jsonwebtoken";

const urlRouter = Router();

urlRouter.post("/", verifyJwt, handleGenerateShortUrl);
urlRouter.get("/", verifyJwt, handleGetUrls);
urlRouter.get("/:shortId", handleVisitUrl);
urlRouter.get("/analytics/:shortId", verifyJwt, handleGetAnalytics);
export default urlRouter;
