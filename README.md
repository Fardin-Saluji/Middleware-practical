Middleware  – Express.js

Objective

Create middleware chain using:

Auth middleware (dummy token check)

Request timer middleware

Protect /profile route


// Middlewares

Auth Middleware:
Checks token from query string (token=12345).
Invalid token → 401 Unauthorized.

Timer Middleware:
Logs request execution time in ms.

Protected Route

/profile uses both middlewares.

Run Project
npm install
node app.js

Server: http://localhost:3000

Test

✅ http://localhost:3000/profile?token=12345

❌ http://localhost:3000/profile?token=1234

Result

Middleware chaining implemented successfully.
