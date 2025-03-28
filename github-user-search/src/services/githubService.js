const GITHUB_API_URL = "https://api.github.com";

export async function fetchGitHubUser(username) {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
  return response.json();
}
