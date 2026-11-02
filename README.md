# HERPICK storefront + admin

React + Vite + TypeScript + Tailwind + Firebase (Auth, Firestore, Storage).

## Setup
1. Create a Firebase project. Enable **Authentication → Email/Password**, **Firestore**, and **Storage**.
2. Add a Web app, copy its config into `.env` (see `.env.example`).
3. In Authentication, create the owner's user (email + password). Copy its **UID**.
4. In Firestore, create document `admins/<that UID>` (any field, e.g. `role: "owner"`). This is what grants admin access; passwords never live in code.
5. Deploy rules: `npm i -g firebase-tools && firebase login && firebase init` (use existing firebase.json / rules files) then `firebase deploy --only firestore:rules,storage`.
6. `npm install && npm run dev`. Open `/admin`, sign in, set the WhatsApp number in Settings, add products.
7. `npm run build && firebase deploy --only hosting` to publish.

## Notes
- Storefront reads products live with Firestore `onSnapshot`; admin changes appear instantly.
- Orders are created by customers (rules restrict to status "Pending"). Stock is not auto-decremented on order; adjust it in Inventory when you confirm orders (safe automatic decrement needs a Cloud Function).
- Placeholders are used until product images are uploaded. Testimonials are sample text.
