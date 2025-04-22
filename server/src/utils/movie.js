import dotenv from "dotenv";

dotenv.config();
const ENDPOINT = process.env.TMDB_API_ENDPOINT;
const TOKEN = process.env.TMDB_API_TOKEN;
const BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN;

export async function retrieve(slug) {
  try {
    const response = await fetch(`${ENDPOINT}/${slug}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`
      },
      redirect: "follow"
    });
    const data = await response.json();
    if (!response.ok) return { success: false, payload: data };
    return { success: true, payload: data };
  } catch (error) {
    return { success: false, payload: error.message };
  }
}