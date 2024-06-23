import { Router } from "express";
import {
  handleGenerateShortUrl,
  handleGetUrls,
} from "../controllers/url.controller";

const urlRouter = Router();

urlRouter.post("/", handleGenerateShortUrl);
urlRouter.get("/", handleGetUrls);
export default urlRouter;
