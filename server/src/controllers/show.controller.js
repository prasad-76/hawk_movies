import NodeCache from "node-cache";
import { retrieve } from "../utils/movie.js";

const cache = new NodeCache({ stdTTL: 3600 * 24, checkperiod: 60 * 60 * 24 });

const mapEndpoint = {
  "tv/our-genres": "genre/tv/list",
  "tv/popular": "tv/popular",
  "tv/trending": "trending/tv/week",
  "tv/new-releases": "tv/upcoming",
  "tv/must-watch": "tv/top_rated",
};

/**
 * @returns data for show genres, popular, trending, new releases, must watch. 
 */
export async function retrieveInfo(req, res) {
  try {
    const { type } = req.params;

    // check if data is cached and return the data if already cached
    const cacheId = `tv/${type}`;
    const endpoint = mapEndpoint[`tv/${type}`];
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
 * @returns detailed data for a specific show.
 */
export async function showDetails(req, res) {
  try {
    const { id } = req.params;

    // check if data is cached and return the data if already cached
    const cacheId = `tv-details/${id}`;
    if (cache.has(cacheId)) return res.status(200).json({ success: true, paylaod: JSON.parse(cache.get(cacheId))});

    // fetch data from the API
    const response = await retrieve(`tv/${id}?append_to_response=videos,reviews,credits,images`);
    if (!response.success) return res.status(404).json({ success: false, payload: response.payload });

    // store the fetched data in the cache
    cache.set(cacheId, JSON.stringify(response.payload));

    return res.status(200).json({ success: true, payload: response.payload });
  } catch (error) {
    return res.status(500).json({ success: false, payload: error.message });
  }
}

/**
 * 
 * @returns detailed information about any particular season details for any particular show. 
 */
export async function seasonDetails(req, res) {
  try {
    const {showId, seasonId} = req.params;

    // check if data present in cache and return data if present in cache
    const cacheId  = `season-${showId}/${seasonId}`;
    if(cache.has(cacheId)) return res.status(200).json({success: true, payload: JSON.parse(cache.get(cacheId))});
    
    // fetch data from the API
    const response = await retrieve(`tv/${showId}/season/${seasonId}`);
    if (!response.success) return res.status(404).json({ success: false, payload: response.payload });

    // store the fetched data in the cache
    cache.set(cacheId, JSON.stringify(response.payload));

    return res.status(200).json({ success: true, payload: response.payload });
  } catch (error) {
    return res.status(500).json({ success: false, payload: error.message });    
  }
}