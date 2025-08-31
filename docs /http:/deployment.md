# Deployment

## Docker Compose
- عدّل ملفات .env
- شغل: docker-compose up --build -d

## Domains
- اضبط DNS لنطاقك (A record)
- أضف HTTPS بوساطة Nginx/Certbot (خارج نطاق هذا القالب)

## Pi Developer Portal
- App URL: يشير إلى واجهتك الأمامية أو البروكسي
- Callback URLs: إن وجدت
- API Key / App ID: أضفها في بيئتك
