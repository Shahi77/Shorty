import { nanoid } from "nanoid";
import asyncHandler from "../utils/asyncHandler.js";
import { URL } from "../models/url.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const handleGenerateShortUrl = asyncHandler(async (req, res) => {
  const shortId = nanoid(8);
  const url = req?.body?.url;

  if (!url) {
    throw new ApiError(500, "url is required");
  }

  const addedUrl = await URL.create({
    shortId: shortId,
    redirectUrl: url,
    visitHistory: [],
  });

  const shortendedUrl = await URL.findById(addedUrl?._id).select("-_id");

  if (!shortendedUrl) {
    throw new ApiError(500, "Something went wrong while shortening the URL");
  }
  return res
    .status(201)
    .json(new ApiResponse(201, shortendedUrl, "url shortened successfully"));
});

const handleGetUrls = asyncHandler(async (req, res) => {
  const urls = await URL.find();
  return res
    .status(200)
    .json(new ApiResponse(200, urls, "fetched successfully"));
});

export { handleGenerateShortUrl, handleGetUrls };
