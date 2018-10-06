const Paynl = require('./index');

const PaynlMerchant = new Paynl.Merchant({
    debug: true,
    username: 'www.clsa.ru_api1.gmail.com',
    password: 'SEM4MA6YSZZWSNMK',
    signature: 'Asub74GJyIbzNneLNi-vNmz9Xg.gAyGgGsXkY1V7ifpZV-A8UN2dVtB4',
    callback: {
        error: 'https://error.com',
        success: 'https://success.com'
    }
});

PaynlMerchant
    .getOrderId({
        amount: 1,
        currency: 'USD',
        description: 'MIT SDK NODE TEST'
    })
    .then(res => {
        return PaynlMerchant.createPaymet(res)
    })
    .then(console.log)
    .catch((error) => {
        console.error('Create Error,', error);
    });
