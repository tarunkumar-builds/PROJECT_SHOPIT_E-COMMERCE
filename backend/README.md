# Backend Deployment

This backend is structured so it can run on both normal Node.js hosting and serverless import-based hosting.

## Entry points

Use the entry point that matches your deployment platform:

| Platform type | Examples | Entry point |
| --- | --- | --- |
| Node web service | Render, Railway, Heroku, Fly.io, VPS | `server.js` through `npm start` |
| Serverless Express import | Vercel and similar Node function hosts | `api/index.js` |
| Local development | Your computer | `npm start` or `npm run server` |

## General setup

1. Set the project root directory to `backend`.
2. Use Node.js 20 or newer.
3. Use `npm install` as the install command.
4. Use `npm start` as the start command on Node web service platforms.
5. Leave build and output directory blank unless your platform requires a value.
6. Add the environment variables listed below.

## Vercel setup

1. Import the repository in Vercel.
2. Set Root Directory to `backend`.
3. Leave Build Command empty.
4. Leave Output Directory empty.
5. Keep Install Command as `npm install`.
6. Add the environment variables.
7. Deploy.

The included `vercel.json` routes all requests to `api/index.js`, which exports the Express app without starting a long-running server.

## Environment variables

Add these in your hosting provider dashboard:

```env
NODE_ENV=production
FRONTEND_URL=https://your-main-frontend-domain.com
ADMIN_FRONTEND_URL=https://your-admin-frontend-domain.com
CORS_ORIGINS=https://your-extra-domain.com,https://another-domain.com
MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
```

`CORS_ORIGINS` is optional. Use it when you need to allow domains beyond `FRONTEND_URL` and `ADMIN_FRONTEND_URL`.

## Health check

After deployment, open your backend domain:

```text
https://your-backend-domain.com/
```

Expected response:

```text
API WORKING
```

## Notes

Product images are uploaded to Cloudinary. Do not rely on the hosting provider's local filesystem for permanent uploaded files.
