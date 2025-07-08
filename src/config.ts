export const UserAccounts = [
  {
    id: 1,
    name: "User A",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNzY4MSwibG9naW5fa2V5IjpudWxsLCJ0b2tlbl9pZCI6IkdkZDNrYkpPNjU3dlc0VmRYRzVNYSIsImlhdCI6MTc1MTk2MzIzOSwiZXhwIjoxNzgzNDk5MjM5fQ.yYJ8qszYOR8uTss01yBWi_-5gnynsHh1982dpmFgYpE",
  },
  {
    id: 2,
    name: "User B",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyODU1MiwibG9naW5fa2V5IjpudWxsLCJ0b2tlbl9pZCI6InUyQnZIV1I4Q0ItMUFBQ0RrVUtBWCIsImlhdCI6MTc1MTk2MzI3OCwiZXhwIjoxNzgzNDk5Mjc4fQ.btdmWgnCYsGGb5w19OvTMjNKgVyJow9laVeRH4t2ujQ",
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
  `${DRIP_BASE_URL}/host/walmart-stream-70725-meha`
)}&token=${HostUserAccounts[0].token}`;
