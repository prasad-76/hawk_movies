import NodeCache from "node-cache";
import { retrieve } from "../utils/movie.js";

const cache = new NodeCache({ stdTTL: 3600 * 24, checkperiod: 60 * 60 * 24 });

const mapEndpoint = {
  "movie/our-genres": "genre/movie/list",
  "movie/popular": "movie/popular",
  "movie/trending": "trending/movie/week",
  "movie/new-releases": "movie/upcoming",
  "movie/must-watch": "movie/top_rated",
}

/**
 * @returns data for movies genres, popular, trending, new releases, must watch. 
 */
export async function retrieveInfo(req, res) {
  try {
    const { type } = req.params;

    // check if data is cached and return the data if already cached
    const cacheId = `movie/${type}`;
    const endpoint = mapEndpoint[`movie/${type}`];
    if (cache.has(cacheId)) return res.status(200).json({ success: true, payload: JSON.parse(cache.get(cacheId))});

    // fetch data from the API
    const response = await retrieve(endpoint);
    if (!response.success) return res.status(404).json({ success: false, payload: response.payload });

    // store the fetched data in the cache
    cache.set(cacheId, JSON.stringify(response.payload));
    return res.status(200).json({ success: true, payload: response.payload });
  } catch (error) {
    return res.status(500).json({ success: false, payload: error.message });
  }
}

/**
 * @returns detailed data for a specific movie.
 */
export async function movieDetails(req, res) {
  try {
    const { id } = req.params;

    // check if data is cached and return the data if already cached
    const cacheId = `movie-details/${id}`;
    if (cache.has(cacheId)) return res.status(200).json({ success: true, payload: JSON.parse(cache.get(cacheId))});

    // fetch data from the API
    const response = await retrieve(`movie/${id}?append_to_response=videos,reviews,credits,images`);
    if (!response.success) return res.status(404).json({ success: false, payload: response.payload });

    // store the fetched data in the cache
    cache.set(cacheId, JSON.stringify(response.payload));

    return res.status(200).json({ success: true, payload: response.payload });
  } catch (error) {
    return res.status(500).json({ success: false, payload: error.message });
  }
}

/**
 * @returns list of popular movies at the moment
 */
export async function bannerMovies(req, res) {
  try {
    // check if data is cached and return the data if already cached
    if (cache.has("movie-bannerSection")) return res.status(200).json({ success: true, payload: JSON.parse(cache.get("movie-bannerSection")) });

    // fetch data from the API
    const response = await retrieve("movie/now_playing");
    if (!response.success) return res.status(404).json({ success: false, payload: response.payload });

    // store the fetched data in the cache
    cache.set("movie-bannerSection", JSON.stringify(response.payload));

    return res.status(200).json({ success: true, payload: JSON.parse(cache.get("movie-bannerSection")) });
  } catch (error) {
    return res.status(500).json({ success: false, payload: error.message });
  }
}