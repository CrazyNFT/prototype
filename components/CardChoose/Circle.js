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
      encryptedData:
        "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tDQpWZXJzaW9uOiBPcGVuUEdQLmpzIHY0LjEwLjQNCkNvbW1lbnQ6IGh0dHBzOi8vb3BlbnBncGpzLm9yZw0KDQp3Y0JNQTBYV1NGbEZScFZoQVFmK05EL0o4RWt6VWo1R2JqVUNRZTk1d1lCOTdLSVdEbVlsYlVXejc5OVENCi9QOEhZSVlJOGxaSVVPTVU2RGxWRlV1Q0VqeVlJMW5SVnBtbUhHaGlwNVNHRlVPcG1jSWtjL0lwYmJjeQ0KbFkzc3Ewdk5lNFBYSVBzSFR6N2FKMjI0U0FJQ3F4ZER5Qkd3U0pNanlVZ0dSNSt4bkZCSjJDNVREV0dzDQpFRUllYmdtYTlkbXVRVzl6bTBIL1ZFVnh6c3Nwc2NFZVlHOTJ6dXZldlI0NExzeUtMY0RSbXJwMVdzK0kNCk9GWFFja3JGU1VGYUc3WWJBTzlMa2thbElWUDZ5aWxXUmNrSURyVWQvWmVTZzcrVURHcUNXa05LTEdYVQ0KcmdBQnpkME82VlJ0dHMzU3RNa3NYTzdIRWpDVHZ0RGdUMFBnRmxQWGV4UHJGR1htYTlldzhNbjVNRGE5DQp6OUpoQVF1aGtuQ1VZaFM1N1BTZlRWWFVndWVEamoxaFFUdXFqbUh5Q3ZqVS9RZjdFY2NOdzBoejhjbG0NCi8ydmU5NGdxd2NHYkdGUXFIOVRKSmhsTmpHa1ZMbUVscU41N3Zyb3UwdkhQS1c0YXMrd1FYQWpPU3ZDZQ0KK3o3NGl6dHhMUVhLR3c9PQ0KPW8zeXoNCi0tLS0tRU5EIFBHUCBNRVNTQUdFLS0tLS0NCg==",
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
      idempotencyKey: "73ef1ac3-8961-4f7b-81d0-6834e70135ee",
      amount: {
        amount: params.amount,
        currency: "USD",
      },
      source: {
        id: params.id,
        type: params.type,
      },
      description: params.description,
      verificationSuccessUrl: params.verificationSuccessUrl,
      verificationFailureUrl: params.verificationFailureUrl,
      metadata: {
        email: params.email,
        phoneNumber: params.phone,
        sessionId: "xxx",
        ipAddress: "172.33.222.1",
      },
      verification: params.verification,
      encryptedData:
        "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tDQpWZXJzaW9uOiBPcGVuUEdQLmpzIHY0LjEwLjQNCkNvbW1lbnQ6IGh0dHBzOi8vb3BlbnBncGpzLm9yZw0KDQp3Y0JNQTBYV1NGbEZScFZoQVFmN0JWRGtZVyszbXovRko0RWxicDdpV21hWTVuaURkdEZaV3k2ekFHK2oNCjZIZlBGVXhaeFlhZTFPRFI4ZWtjU2pldGpBL0lQMzQzN3J1YVNCODR0NTFMZnhwNStnV0pOQSttMG56bg0KUm5LQytnZUZBZ1pIU3hScDRpYXBIRDhOV2lwNXNSUGdVWWtEQVJDaXpxSkRHRlg0R3ZGUm5UNHgvSE9tDQpLakVCeEc2cjQ4YTJ4V2djWTJnUWpPVU1oVSsya1hyNlFJZFVVUDhEa01qbFhsUm9Tc3ZnMzB6VTlzWnYNCjZubmRSOXZnamNKNnZKVUg2cHBrZ0kyN3RWYWZCVnBTY0JCU2xkNmRmN0kzYVN3L3F2cVZBMTc0Rlp6cA0KZ1liSjEzM1ZwOE5OSk4rU0E0VDdEUUhTTjRJWlJKT2NOYWxSajFFZ0pCbC90Wmtlc051ZjI5Vzd0TnA1DQpBdEpHQVQ4djNRTytQbitXMnVTWWUzOU82NlA3ZGY1cUM4dmpTMTFoY2VaV3NjdzZGb2x6b3FMazZySk4NCmdZZWFtNnV5Yk9YVkpKaEtBaXdjTnJVejNDQVVkWHEyQVVhWlp3PT0NCj1qTWJUDQotLS0tLUVORCBQR1AgTUVTU0FHRS0tLS0tDQo=",
      keyId: "key1",
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
function withdrawTransaction() {
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
      destination: { type: "ach", id: "14de0159-c559-4205-a5d2-6d3f5663560a" },
      amount: { amount: "01", currency: "USD" },
      metadata: { beneficiaryEmail: "satoshi@circle.com" },
      idempotencyKey: "37436105-1981-423f-bb1c-6b0402727580",
    }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}

export { createCard, sendTransaction, getBalance, withdrawTransaction };

// processor-sandbox-circle-5344625c-3ddd-46b5-8ff6-5832f8ce36ee
