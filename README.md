# Accountant for Pi | محاسب باي

Your personal accounting assistant, designed specifically for *Pi Network* users.  
The app helps you manage all your financial transactions easily and securely.

---

## 🚀 Features

- ✅ Login with Pi Network account (Pi SDK integration)  
- ✅ Track your Pi wallet balance and view recent transactions  
- ✅ Create and manage *sales* and *purchase* invoices  
- ✅ Generate *QR codes* for fast and secure Pi payments  
- ✅ Simple and user-friendly interface built with *Node.js* and *Express*  

---

## 📦 Current Release

*Version:* v0.1.0  
This is the *initial release*, providing the basic accounting features for Pi users.  
Future updates will include advanced reporting, analytics, and multi-user support.

---

## 🛠 Tech Stack

- *Backend:* Node.js (Express)  
- *Environment Management:* dotenv  
- *Pi SDK Integration:* Official Pi SDK  
- *Deployment:* Compatible with Pi Browser and HTTPS hosting (e.g., Vercel, custom domain)  

---

## 🔒 Security & Privacy

- All user data and transactions are handled securely.  
- The app runs only within *Pi Browser* with HTTPS enabled.  
- Includes basic Privacy Policy and Terms of Service as required by Pi Developer guidelines.  

---

## 📌 Roadmap

- [ ] Add detailed financial reports  
- [ ] Support for inventory and expense tracking  
- [ ] Multi-language support (English / Arabic)  
- [ ] Improved UI/UX for mobile devices  

---

## 🤝 Contribution

This is an open project for the *Pi Network community*.  
Developers are welcome to suggest features, fix bugs, and improve the code.

---

## 📄 License

This project is licensed under the *PiOS License*.  
See [PiOS License](https://developers.minepi.com/pios-license) for more details.
---

### 🌐 Live App
🔗 [https://apppiaccountant9406.pinet.com](https://apppiaccountant9406.pinet.com)



# Accountant for Pi | محاسب باي

Monorepo يحتوي على:
- *backend/*: خادم Express/TypeScript + MongoDB + تكامل Pi Platform (قالب جاهز للموافقة/الإكمال).
- *frontend/*: واجهة React + Pi SDK (مصادقة + إنشاء دفعة).
- *reverse-proxy/*: Nginx لتجميع الخدمات.
- *docs/*: توثيق التطوير والنشر.

## المتطلبات
- Node.js >= 18
- Docker + Docker Compose (للتشغيل السريع اختياري)
- حساب مطوّر Pi للحصول على *PI_API_KEY* و *PI_APP_ID*

## تشغيل سريع عبر Docker
```bash
cp backend/.env.example backend/.env
# عدّل القيم الخضراء داخل backend/.env
cp frontend/.env.development.example frontend/.env.development
# عدّل القيم الخضراء داخل frontend/.env.development

docker-compose up --build
## ملاحظات

- الواجهة الأمامية: http://localhost:3314  
- الواجهة الخلفية: http://localhost:8000  
- البروكسي:        http://localhost:8080  

تشغيل محلي بدون Docker:  
- اتبع التعليمات داخل backend/README.md و frontend/README.md.

تنبيه:  
- جميع القيم الحساسة (مثل API Keys) توضع في ملفات .env ولا تُرفع إلى Git.  
- التكامل مع Pi Platform موجود في:  
  - backend/src/platformAPIClient.ts  
  - backend/src/handlers/payments.ts  
  استبدل الدوال الوهمية بالاستدعاءات الحقيقية عندما تضع مفاتيحك.
