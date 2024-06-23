import { Router } from "express";
import {
  handleGenerateShortUrl,
  handleGetAnalytics,
  handleGetUrls,
  handleVisitUrl,
} from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/", handleGenerateShortUrl);
urlRouter.get("/", handleGetUrls);
urlRouter.get("/:shortId", handleVisitUrl);
urlRouter.get("/analytics/:shortId", handleGetAnalytics);
export default urlRouter;
