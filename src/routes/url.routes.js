import { Router } from "express";
import {
  handleGenerateShortUrl,
  handleGetUrls,
} from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/", handleGenerateShortUrl);
urlRouter.get("/", handleGetUrls);
export default urlRouter;
