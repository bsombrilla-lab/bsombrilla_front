// config.js
const API_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:5500"
    : "https://bsombrilla-back.onrender.com";
