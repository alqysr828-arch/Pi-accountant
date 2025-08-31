type PaymentState = "created" | "approved" | "completed" | "cancelled" | "error";

export interface PaymentRecord {
  id: string;
  state: PaymentState;
  txid?: string;
  amount?: number;
  memo?: string;
  createdAt: Date;
  updatedAt: Date;
}

/** تخزين مؤقت في الذاكرة للتجارب (استبدله بـ Mongo Models لاحقاً) */
const store = new Map<string, PaymentRecord>();

export const PaymentStore = {
  upsert(p: PaymentRecord) {
    store.set(p.id, { ...p, updatedAt: new Date() });
  },
  get(id: string) {
    return store.get(id) || null;
  }
};
