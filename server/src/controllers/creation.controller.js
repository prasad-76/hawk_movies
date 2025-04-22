import NodeCache from "node-cache";
import { retrieve } from "../utils/movie.js";

const cache = new NodeCache({ stdTTL: 3600 * 24, checkperiod: 60 * 60 * 24 });

export async function discoverCreations(req, res) {
  try {
    const { endpoint } = req.params;
    let tmdbEndpoint = endpoint + "?";
    for (const [key, value] of Object.entries(req.query)) {
      tmdbEndpoint += `${key}=${value}&`;
    }
    // check if data is cached and return the data if already cached
    if (cache.has(tmdbEndpoint)) return res.status(200).json({ success: true, payload: JSON.parse(cache.get(tmdbEndpoint)) });

    const response = await retrieve(`discover/${tmdbEndpoint}`);
    if (!response.success) return res.status(400).json({ success: false, payload: "No  data available for such request" });

    // store the fetched data in the cache
    cache.set(tmdbEndpoint, JSON.stringify(response.payload));

    return res.status(200).json({ success: true, payload: response.payload })
  } catch (error) {
    return res.status(500).json({ success: true, payload: `Internal server error - ${error.message}` })
  }
}