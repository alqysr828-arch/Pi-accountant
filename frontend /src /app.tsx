import React, { useEffect, useState } from "react";
import { approve, complete } from "./api";
import "./styles.css";

declare global {
  interface Window { Pi: any; _PI_SANDBOX_: boolean; }
}

export default function App() {
  const [auth, setAuth] = useState<any>(null);
  const [amount, setAmount] = useState("0.001");
  const [memo, setMemo] = useState("Test Payment");

  useEffect(() => {
    // init Pi SDK
    const sandbox = import.meta.env.VITE_SANDBOX === "true";
    window.Pi?.init({ version: "2.0", sandbox });
  }, []);

  const handleAuth = async () => {
    const scopes = ["payments", "username"];
    function onIncompletePaymentFound(payment: any) {
      console.log("incomplete payment", payment);
      if (payment?.identifier) {
        complete(payment.identifier, payment?.transaction?.txid).catch(console.error);
      }
    }
    try {
      const auth = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
      setAuth(auth);
      alert("تمت المصادقة، جاهز للمدفوعات.");
    } catch (e: any) {
      alert("فشل المصادقة: " + (e?.message || e));
    }
  };

  const handlePay = async () => {
    try {
      const paymentData = {
        amount: parseFloat(amount),
        memo,
        metadata: { source: "pi-accountant-demo" }
      };
      const callbacks = {
        onReadyForServerApproval: (paymentId: string) => {
          console.log("onReadyForServerApproval", paymentId);
          approve(paymentId).catch(console.error);
        },
        onReadyForServerCompletion: (paymentId: string, txid: string) => {
          console.log("onReadyForServerCompletion", paymentId, txid);
          complete(paymentId, txid).catch(console.error);
        },
        onCancel: (payment: any) => alert("أُلغي الدفع"),
        onError: (err: any) => alert("خطأ في الدفع: " + (err?.message || err)),
      };

      await window.Pi.createPayment(paymentData, callbacks);
    } catch (e: any) {
      alert("createPayment فشل: " + (e?.message || e));
    }
  };

  return (
    <div>
      <h1>محاسب باي | Pi Accountant</h1>
      <div className="card">
        <button onClick={handleAuth}>مصادقة Pi</button>
      </div>

      <div className="card">
        <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="المبلغ (Pi)" />
        <input value={memo} onChange={e => setMemo(e.target.value)} placeholder="مذكرة" />
        <button onClick={handlePay}>إنشاء دفع</button>
      </div>
    </div>
  );
}
