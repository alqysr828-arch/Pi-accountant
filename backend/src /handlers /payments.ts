import { Request, Response } from "express";
import { approvePaymentOnPi, completePaymentOnPi } from "../platformAPIClient.js";
import { PaymentStore } from "../services/payments.service.js";

export async function approve(req: Request, res: Response) {
  const { paymentId } = req.body;
  if (!paymentId) return res.status(400).json({ ok: false, error: "paymentId required" });

  try {
    const resp = await approvePaymentOnPi(paymentId);
    PaymentStore.upsert({
      id: paymentId,
      state: "approved",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return res.json({ ok: true, platform: resp.data });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "approve error" });
  }
}

export async function complete(req: Request, res: Response) {
  const { paymentId, txid } = req.body;
  if (!paymentId) return res.status(400).json({ ok: false, error: "paymentId required" });

  try {
    const resp = await completePaymentOnPi(paymentId, txid);
    PaymentStore.upsert({
      id: paymentId,
      txid,
      state: "completed",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return res.json({ ok: true, platform: resp.data });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "complete error" });
  }
}

export async function status(req: Request, res: Response) {
  const id = req.params.id;
  const p = PaymentStore.get(id);
  res.json({ ok: true, payment: p });
}
