// تحميل مكتبة en
require('dotenv').config();
const express = require('express');
const app = express();

// إعدادات عامة
const PORT = process.env.APP_PORT || 3000;

// ميدل وير
app.use(express.json());

// ----------------------------
// Pi API Keys & Config
// ----------------------------
const piApiKey = process.env.PI_API_KEY || "dummy_api_key";
const appId = process.env.PI_APP_ID || "dummy_app_id";
const dbConnection = process.env.DB_CONNECTION_STRING || "dummy_db_connection";
const secretKey = process.env.APP_SECRET || "dummy_secret";

// ----------------------------
// Routes Example
// ----------------------------
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Pi Accountant API is running!",
    appId,
    piApiKey: "hidden_for_security",
  });
});

// استدعاء مسارات جاهزة
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// ----------------------------
// تشغيل السيرفر
// ----------------------------
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
