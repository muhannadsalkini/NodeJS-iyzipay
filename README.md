# NodeJS iyzipay — iyzico Integration Notes

An early-stage Node.js/Express scaffold and reference notes for integrating the [iyzico](https://www.iyzico.com) payment gateway, focused on its **Subscription API (v2)** and its `IYZWS` request-signing scheme.

> **Status: work in progress / reference.** This repo is a starting point, not a working integration. The Express server is a stub, and the iyzico endpoints are documented as notes rather than implemented as routes.

## 📚 What's Inside

**`index.js`**
- Minimal Express server on port `3060` with a `GET /` health route.
- iyzico request models (payment, checkout form, BKM Express, refund, cancel, installment, BIN lookup, sub-merchant, stored card, etc.) as plain JavaScript objects.
- The `IYZWS` authorization logic, adapted from iyzico's Postman collection:
  - `generateRequestString` builds iyzico's PKI request string from a request object,
  - `generateAuthorizationString` hashes `apiKey + random + secretKey + pkiString` with SHA-1, Base64-encodes it and returns `IYZWS <apiKey>:<hash>`,
  - `jsonToObj` / `nullClear` map a JSON body onto a request model and strip empty fields.

**`Controllers/`** — annotated reference notes (in Turkish) for iyzico Subscription API v2 endpoints, with request fields and sample `200` responses:

| File | Covers |
| --- | --- |
| `SubscriptionProducts.js` | Create, update, delete, get and list subscription products |
| `Payments.js` | Create, update, delete, get and list pricing plans |
| `Subscribers.js` | Update, get and list subscribers (customers) |
| `Subscriptions.js` | Initialize (non-3DS), activate, retry failed payment, upgrade, cancel, get, search, card update |

## 🛠 Tech Stack

- Node.js, Express 4
- dotenv (listed as a dependency, not yet wired in)
- iyzico REST API (`api.iyzipay.com`)

## 🚧 Running It

```bash
git clone https://github.com/muhannadsalkini/NodeJS-iyzipay.git
cd NodeJS-iyzipay
npm install
npm run dev     # nodemon index.js (nodemon must be installed globally or via npx)
```

`index.js` does not start cleanly as committed:

- it `require`s `mongoose`, which is not listed in `package.json`;
- the signing code still references Postman sandbox globals (`globals`, `request`, `postman`, `CryptoJS`) that do not exist in Node.js.

To turn it into a working server, install `crypto-js` (or use Node's built-in `crypto`), read `API_KEY` / `SECRET_KEY` from a `.env` file via `dotenv`, and pass the request body and the `x-iyzi-rnd` header value into `generateAuthorizationString` instead of the Postman objects.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `API_KEY` | iyzico API key (sandbox keys start with `sandbox-`) |
| `SECRET_KEY` | iyzico secret key |

Keep these in a local `.env` file and do not commit it.

## 📁 Project Structure

```
index.js                          # Express stub, request models, IYZWS signing helpers
Controllers/
├── SubscriptionProducts.js       # Product endpoint notes
├── Payments.js                   # Pricing plan endpoint notes
├── Subscribers.js                # Subscriber endpoint notes
└── Subscriptions.js              # Subscription lifecycle endpoint notes
```

## 🔗 References

- [iyzico developer docs](https://docs.iyzico.com)
- [Official iyzipay Node.js client](https://github.com/iyzico/iyzipay-node)

## 📄 License

[MIT](LICENSE)
