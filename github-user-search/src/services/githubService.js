import axios from "axios";

const GITHUB_SEARCH_API_URL = "https://api.github.com/search/users?q=";

export async function fetchAdvancedUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `user:${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  if (!query) {
    return [];
  }

  try {
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}${query.trim()}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`, // Optional
      },
    });

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
