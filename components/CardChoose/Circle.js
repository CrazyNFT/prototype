//Create A New Card (CALLED BY /pages/circle/add-card.js) | Check for bugs
function createCard(params) {
  const url = "https://api-sandbox.circle.com/v1/cards";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer QVBJX0tFWTpkNjMyYmU5ZjhjYjJkNDkxMjQwMGQ1ODBiMTYxYWRjMTo4YTVkNWIyNzk1MjhiOGNjZDZmYzY4NGFlNjFmYjFlZQ==",
    },
    body: JSON.stringify({
      idempotencyKey: "a8ce4c7b-4fa7-4fac-93c5-28d778283aa4",
      expMonth: params.expMonth,
      expYear: params.expYear,
      keyId: "key1",
      encryptedData: {
        number: params.card,
        cvv: params.cvv,
      },
      billingDetails: {
        name: params.name,
        country: params.country,
        district: params.district,
        line1: params.line1,
        line2: params.line2,
        city: params.city,
        postalCode: params.postalCode,
      },
      metadata: {
        email: params.email,
        phoneNumber: params.phoneNumber,
        sessionId: params.sessionId,
        ipAddress: params.ipAddress,
      },
    }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}

//Recieve Payment (CALLED BY /pages/circle/payment.js) | Check for bugs
function sendTransaction(params) {
  const url = "https://api-sandbox.circle.com/v1/payments";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer QVBJX0tFWTpkNjMyYmU5ZjhjYjJkNDkxMjQwMGQ1ODBiMTYxYWRjMTo4YTVkNWIyNzk1MjhiOGNjZDZmYzY4NGFlNjFmYjFlZQ==",
    },
    body: JSON.stringify({
      metadata: {
        email: params.email,
        phoneNumber: params.phone,
        sessionId: "DE6FA86F60BB47B379307F851E238617",
        ipAddress: "244.28.239.130",
      },
      amount: { amount: params.amount, currency: "USD" },
      source: { id: params.id, type: params.type },
      encryptedData: { cvv: params.cvv },
      idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
      keyId: "a8ce4c7b-4fa7-4fac-93c5-28d778283aa4",
      verification: params.verification,
      description: params.description,
    }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error("error:" + err));
}

//Get Circle Account balance (DONE)
function getBalance() {
  const url = "https://api-sandbox.circle.com/v1/businessAccount/balances";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer QVBJX0tFWTpkNjMyYmU5ZjhjYjJkNDkxMjQwMGQ1ODBiMTYxYWRjMTo4YTVkNWIyNzk1MjhiOGNjZDZmYzY4NGFlNjFmYjFlZQ==",
    },
  };

  return fetch(url, options)
    .then((res) => res.json())
    .catch((err) => "error:" + err);
}

//Withdraw payment (YET TO BE INTEGRATED)
function withdrawTransaction(params) {
  const url = "https://api-sandbox.circle.com/v1/payouts";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer QVBJX0tFWTpkNjMyYmU5ZjhjYjJkNDkxMjQwMGQ1ODBiMTYxYWRjMTo4YTVkNWIyNzk1MjhiOGNjZDZmYzY4NGFlNjFmYjFlZQ==",
    },
    body: JSON.stringify({
      destination: { type: params.type, id: params.id },
      amount: { amount: params.amount, currency: "USD" },
      metadata: { beneficiaryEmail: params.email },
      idempotencyKey: "37436105-1981-423f-bb1c-6b0402727580",
    }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));
}

export { createCard, sendTransaction, getBalance, withdrawTransaction };

// processor-sandbox-circle-5344625c-3ddd-46b5-8ff6-5832f8ce36ee
