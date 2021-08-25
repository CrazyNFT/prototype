//Create A New Card
function createCard() {
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
        amount: "00.00",
        currency: "USD",
      },
      source: {
        id: "593dec41-3472-45a9-827b-a5c9e41fc8f0",
        type: "card",
      },
      description: "",
      verificationSuccessUrl: "",
      verificationFailureUrl: "",
      metadata: {
        email: "satoshi@circle.com",
        phoneNumber: "+14155555555",
        sessionId: "xxx",
        ipAddress: "172.33.222.1",
      },
      verification: "cvv",
      encryptedData:
        "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tDQpWZXJzaW9uOiBPcGVuUEdQLmpzIHY0LjEwLjQNCkNvbW1lbnQ6IGh0dHBzOi8vb3BlbnBncGpzLm9yZw0KDQp3Y0JNQTBYV1NGbEZScFZoQVFmN0JWRGtZVyszbXovRko0RWxicDdpV21hWTVuaURkdEZaV3k2ekFHK2oNCjZIZlBGVXhaeFlhZTFPRFI4ZWtjU2pldGpBL0lQMzQzN3J1YVNCODR0NTFMZnhwNStnV0pOQSttMG56bg0KUm5LQytnZUZBZ1pIU3hScDRpYXBIRDhOV2lwNXNSUGdVWWtEQVJDaXpxSkRHRlg0R3ZGUm5UNHgvSE9tDQpLakVCeEc2cjQ4YTJ4V2djWTJnUWpPVU1oVSsya1hyNlFJZFVVUDhEa01qbFhsUm9Tc3ZnMzB6VTlzWnYNCjZubmRSOXZnamNKNnZKVUg2cHBrZ0kyN3RWYWZCVnBTY0JCU2xkNmRmN0kzYVN3L3F2cVZBMTc0Rlp6cA0KZ1liSjEzM1ZwOE5OSk4rU0E0VDdEUUhTTjRJWlJKT2NOYWxSajFFZ0pCbC90Wmtlc051ZjI5Vzd0TnA1DQpBdEpHQVQ4djNRTytQbitXMnVTWWUzOU82NlA3ZGY1cUM4dmpTMTFoY2VaV3NjdzZGb2x6b3FMazZySk4NCmdZZWFtNnV5Yk9YVkpKaEtBaXdjTnJVejNDQVVkWHEyQVVhWlp3PT0NCj1qTWJUDQotLS0tLUVORCBQR1AgTUVTU0FHRS0tLS0tDQo=",
      keyId: "key1",
    }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}

//Recieve Payment
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

//Get Circle Account balance
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

//Withdraw payment
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
      amount: { amount: "00", currency: "USD" },
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
