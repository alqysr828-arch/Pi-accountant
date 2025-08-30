require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

// تخزين مؤقت للمدفوعات للاختبار (استبدل بقاعدة بيانات لاحقاً)
const payments = new Map();

/**
 * ملاحظة مهمة:
 *  - هنا نعرض دوال جاهزة للتكامل مع Pi backend.
 *  - استبدل عنوان URL وطرق المصادقة وفق توثيق بوابة مطوري Pi.
 */
async function approvePaymentOnPi(paymentId) {
  // ضع هنا نداء حقيقي إلى واجهة Pi باستخدام PI_API_KEY
  // مثال توضيحي (غير نهائي — راجع توثيق Pi لعنوان النداء الصحيح)
  // return axios.post('https://api.pi.example/payments/approve', { paymentId }, { headers: { Authorization: `Bearer ${process.env.PI_API_KEY}` }});
  return { data: { ok: true } };
}

async function completePaymentOnPi(paymentId, txid) {
  // تحقق/أخبر Pi بأن العملية اكتملت
  return { data: { ok: true } };
}

// نقاط نهاية الخادم لاختبار دورة الدفع
app.post('/payments/approve', async (req, res) => {
  const { paymentId } = req.body;
  console.log('Approve request received for:', paymentId);
  payments.set(paymentId, { status: 'approved' });

  try {
    const resp = await approvePaymentOnPi(paymentId);
    console.log('Pi approve response:', resp.data);
    return res.json({ ok: true });
  } catch (err) {
    console.error('Error approving on Pi:', err.message || err);
    return res.status(500).json({ ok: false, error: err.message || err });
  }
});

app.post('/payments/complete', async (req, res) => {
  const { paymentId, txid } = req.body;
  console.log('Complete request received for:', paymentId, txid);
  payments.set(paymentId, { status: 'completed', txid });

  try {
    const resp = await completePaymentOnPi(paymentId, txid);
    console.log('Pi complete response:', resp.data);
    // هنا تسلّم المنتج/الخدمة (اختباري: نطبع فقط)
    console.log(`Delivering product for payment ${paymentId}`);
    return res.json({ ok: true });
  } catch (err) {
    console.error('Error completing on Pi:', err.message || err);
    return res.status(500).json({ ok: false, error: err.message || err });
  }
});

app.get('/payments/status/:id', (req, res) => {
  const p = payments.get(req.params.id) || null;
  res.json({ paymentId: req.params.id, data: p });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
