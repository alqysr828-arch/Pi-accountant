let accessToken = null;
let currentPaymentId = null;

document.getElementById('authBtn').addEventListener('click', () => {
  const scopes = ['payments','username'];
  function onIncompletePaymentFound(payment) {
    console.log('incomplete payment found', payment);
    // مثال: أبلغ الخادم لمحاولة إكمال أو إلغاء
    fetch('/payments/complete', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ paymentId: payment.identifier, txid: payment.transaction?.txid || null, debug: 'incomplete' })
    }).then(r => r.json()).then(console.log).catch(console.error);
  }

  Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth) {
    console.log('Authenticated', auth);
    accessToken = auth.accessToken;
    alert('مصدق: جاهز للمدفوعات');
  }).catch(function(error) {
    console.error('Auth error', error);
    alert('خطأ في المصادقة');
  });
});

document.getElementById('payBtn').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  const memo = document.getElementById('memo').value;

  const paymentData = { amount, memo, metadata: {} };

  const paymentCallbacks = {
    onReadyForServerApproval: (paymentId) => {
      console.log('onReadyForServerApproval', paymentId);
      currentPaymentId = paymentId;
      fetch('/payments/approve', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ paymentId })
      }).then(r => r.json()).then(console.log).catch(console.error);
    },
    onReadyForServerCompletion: (paymentId, txid) => {
      console.log('onReadyForServerCompletion', paymentId, txid);
      fetch('/payments/complete', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ paymentId, txid })
      }).then(r => r.json()).then(console.log).catch(console.error);
    },
    onCancel: (payment) => {
      console.log('payment cancelled', payment);
      alert('المستخدم ألغى الدفع');
    },
    onError: (err) => {
      console.error('payment error', err);
      alert('خطأ في الدفع');
    }
  };

  Pi.createPayment(paymentData, paymentCallbacks).then(payment => {
    console.log('createPayment result', payment);
  }).catch(err => {
    console.error('createPayment exception', err);
  });
});
