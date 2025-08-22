// نخبر التطبيق أن هناك ملف .env
require('dotenv').config();

// استخدام المتغيرات من .env.example أو قيم افتراضية
const piApiKey = process.env.PI_API_KEY || "dummy_api_key";
const appId = process.env.PI_APP_ID || "dummy_app_id";
const dbConnection = process.env.DB_CONNECTION_STRING || "dummy_db_connection";
const secretKey = process.env.APP_SECRET || "dummy_secret";

// اختبار بسيط للتأكد أن المتغيرات تُقرأ
console.log("PI API Key:", piApiKey);
console.log("App ID:", appId);
console.log("DB Connection:", dbConnection);
console.log("App Secret:", secretKey);
