import axios from "axios";
import { env } from "./environments.js";

/**
 * عميل عام للتواصل مع Pi Platform.
 * ملاحظة مهمة: استبدل نقاط النهاية (endpoints) وفق وثائق Pi الرسمية عند التكامل الحقيقي.
 */
export const platformApi = axios.create({
  baseURL: env.platformApiUrl,
  timeout: 10000,
  headers: {
    Authorization: Key ${env.piApiKey}, // أو Bearer حسب متطلبات بوابة Pi
    "Content-Type": "application/json"
  }
});

// أمثلة (قوالب) — عدل المسارات طبقا لتوثيق Pi
export async function approvePaymentOnPi(paymentId: string) {
  // return platformApi.post(/payments/${paymentId}/approve);
  return { data: { ok: true, mocked: true, paymentId } };
}

export async function completePaymentOnPi(paymentId: string, txid?: string) {
  // return platformApi.post(/payments/${paymentId}/complete, { txid });
  return { data: { ok: true, mocked: true, paymentId, txid } };
}
