const rawUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

// Normalize URL: remove trailing slashes and any trailing '/api'
export const API_URL = rawUrl.replace(/\/+$/, "").replace(/\/api$/, "");
