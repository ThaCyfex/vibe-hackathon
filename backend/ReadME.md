# Railway Deployment Instructions

## 1. Environment Variables
Set the following environment variables in your Railway project:
- `MONGO_URI`: Your MongoDB connection string (e.g., from Railway MongoDB plugin or MongoDB Atlas)
- `PORT`: (Optional) The port your server should run on (default is 5000)
- `JWT_SECRET`: A strong secret for JWT authentication

## 2. Deploying
- Push your code to GitHub and connect your repository to Railway.
- Railway will install dependencies and run `npm start` (as defined in `package.json`).

## 3. Health Check
- After deployment, visit `/api/health` on your Railway app URL to check server and MongoDB status. Example:
  `https://your-railway-app-url.up.railway.app/api/health`
- You should see a JSON response with `status: ok` and `db: connected` if MongoDB is working.

## 4. Troubleshooting
- If `db` is not `connected`, check your `MONGO_URI` value in Railway environment settings.
- Check Railway logs for errors.

---

For more details, see the main README below. 