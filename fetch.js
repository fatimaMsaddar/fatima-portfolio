const fs = require("fs");
const https = require("https");

const GITHUB_TOKEN = process.env.MY_GITHUB_TOKEN; // GitHub Actions will inject this
const GITHUB_USERNAME = "fatimaMsaddar"; // Replace with your actual GitHub username

if (!GITHUB_TOKEN) {
  console.error("❌ GITHUB_TOKEN is missing!");
  process.exit(1);
}

console.log(`🚀 Fetching GitHub profile data for ${GITHUB_USERNAME}`);

const data = JSON.stringify({
  query: `
  {
    user(login: "${GITHUB_USERNAME}") { 
      name
      bio
      avatarUrl
      location
      pinnedItems(first: 6, types: [REPOSITORY]) {
        edges {
          node {
            ... on Repository {
              name
              description
              url
            }
          }
        }
      }
    }
  }`
});

const options = {
  hostname: "api.github.com",
  path: "/graphql",
  method: "POST",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "GitHubActionsScript",
    "Content-Type": "application/json"
  }
};

const req = https.request(options, (res) => {
  let responseData = "";

  res.on("data", (chunk) => {
    responseData += chunk;
  });

  res.on("end", () => {
    fs.writeFileSync("./public/profile.json", responseData);
    console.log("✅ GitHub data saved to public/profile.json");
  });
});

req.on("error", (error) => {
  console.error("❌ Error fetching GitHub data:", error);
  process.exit(1);
});

req.write(data);
req.end();
