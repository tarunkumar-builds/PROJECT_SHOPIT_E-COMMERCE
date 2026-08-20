# Backend Deployment on Vercel

This backend is ready to deploy as a Vercel Node.js function.

## Manual Vercel setup

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, import the repository.
3. Set the project Root Directory to `backend`.
4. Leave Build Command empty.
5. Leave Output Directory empty.
6. Keep Install Command as `npm install`.
7. Add the environment variables listed below.
8. Deploy the project.

## Environment variables

Add these in Vercel under Project Settings > Environment Variables:

```env
NODE_ENV=production
FRONTEND_URL=https://your-main-frontend.vercel.app
ADMIN_FRONTEND_URL=https://your-admin-frontend.vercel.app
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

`CORS_ORIGINS` is optional. Use it only when you need to allow more domains besides `FRONTEND_URL` and `ADMIN_FRONTEND_URL`.

## Health check

After deployment, open:

```text
https://your-backend-project.vercel.app/
```

You should see:

```text
API WORKING
```
