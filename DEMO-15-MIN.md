# BookVerse — 15-minute demo checklist

## 1. Start the frontend

From the repository root:

```bash
python -m http.server 5500
```

Open `http://localhost:5500`.

## 2. Optional backend demo

If you have the separate `BookVerse.Api` project, create/configure its PostgreSQL database, update its local connection string, then run:

```bash
dotnet restore
dotnet run --urls http://localhost:5000
```

Open `http://localhost:5000/swagger` to inspect the API. Do not commit local database credentials.

## 3. Suggested walkthrough

1. Home page and responsive navigation.
2. Catalog search, filters, sorting and layout toggle.
3. Open a book detail page and add it to the cart or wishlist.
4. Change cart quantities, try `BOOK10` or `WELCOME`, and demonstrate the sample checkout flow.
5. Open login/sign-up and profile pages.
6. Explain that `localStorage` powers demo cart/wishlist state, while a separately running .NET API can supply books/authentication.

## Important

The frontend checkout is a simulation, not a real payment. API endpoints require the matching backend to be running and configured. A GitHub Pages site cannot call an API at `localhost` on a visitor's computer.
