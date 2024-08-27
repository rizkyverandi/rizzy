import "dotenv/config";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const HTTP_GITHUB_HEADERS = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${process.env.NEXT_PRIVATE_GITHUB_TOKEN}`,
  "X-GitHub-Api-Version": "2022-11-28",
} as const;
