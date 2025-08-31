import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
export const api = axios.create({ baseURL });

export async function approve(paymentId: string) {
  return api.post("/api/payments/approve", { paymentId });
}

export async function complete(paymentId: string, txid?: string) {
  return api.post("/api/payments/complete", { paymentId, txid });
}
