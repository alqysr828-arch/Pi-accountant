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
