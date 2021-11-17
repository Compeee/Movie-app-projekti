const express = require("express");
const router = express.Router();
const needle = require("needle");
const url = require("url");

const API_KEY_VALUE = process.env.APP_API_KEY_VALUE;
const API_KEY_NAME = process.env.APP_API_KEY_NAME;
const API_BASE_URL = process.env.APP_BASE_URL;

// Routes for all the api calls used in the app

router.get("/", async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle(
      "get",
      `${API_BASE_URL}` + "/trending/all/day?" + `${params}`
    );
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/popularmovies", async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle(
      "get",
      `${API_BASE_URL}` +
        "/discover/movie?sort_by=popularity.desc&" +
        `${params}`
    );
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/popularshows", async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle(
      "get",
      `${API_BASE_URL}` + "/discover/tv?sort_by=popularity.desc&" + `${params}`
    );
    console.log(params);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.get("/search", async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle(
      "get",
      `${API_BASE_URL}` + "/search/multi?" + `${params}`
    );
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
