export const UserAccounts = [
  {
    id: 1,
    name: "User A",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNzY4MSwibG9naW5fa2V5IjpudWxsLCJ0b2tlbl9pZCI6IjByU0lzY2hOM19NU3J1ZFE1bXdPZCIsImlhdCI6MTc1MTg5NTc1NywiZXhwIjoxNzgzNDMxNzU3fQ.Fjj9q1euWhOFVT7m-QwxRDlXZuI2K2Dvoy35Nuszclg",
  },
  {
    id: 2,
    name: "User B",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyODU1MiwibG9naW5fa2V5IjpudWxsLCJ0b2tlbl9pZCI6IjlhRXVNYk5ncVBQRnNvS3ZodjQ4NSIsImlhdCI6MTc1MTg5NTY4MCwiZXhwIjoxNzgzNDMxNjgwfQ.sYTPIErAuB91mdBBsa0OjgBsOnp159tDjTz_Sh0QdHM",
  },
];

export const HostUserAccounts = [
  {
    id: 1,
    name: "Host User A",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNzY4NiwibG9naW5fa2V5IjpudWxsLCJ0b2tlbl9pZCI6InRuYndzM0NUSWhEZjRWOUZyV2w5VCIsImlhdCI6MTc1MTk1NzkzNiwiZXhwIjoxNzgzNDkzOTM2fQ.ywGM0xOgsqGn6Lkcb2ffMaid0TdP7TtVi4m0WIV2cSE",
  },
];

export const DRIP_BASE_URL =
  "https://www.feat-shripal-1.dripshop-feature-branch.live";
// export const DRIP_BASE_URL = "http://localhost:3000"

export const GoLiveUrl = `${DRIP_BASE_URL}/redirect?continue=${encodeURIComponent(
  `${DRIP_BASE_URL}/stream-embedded/walmart-stream-70725-meha`
)}&token=${HostUserAccounts[0].token}`;
