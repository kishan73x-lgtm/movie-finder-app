
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());


const API_KEY = process.env.API_KEY;

app.get("/movies", async (req, res) => {

  const {query, page} = req.query;
console.log("API_KEY", API_KEY);


  try {

    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: API_KEY,
          query: query,
          page: page
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.log("TMDB API Error : ", error.response ?.data || error.message);
    

    res.status(500).json({
      error: "Failed to fetch movies"
    });

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

