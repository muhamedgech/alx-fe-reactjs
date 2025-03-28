import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/users/";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`, // Optional
      },
    });
    return response.data;
  } catch (error) {
    return { message: "Not Found" };
  }
}
