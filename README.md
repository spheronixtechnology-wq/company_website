
# Spheronix Technology Website

A fast, responsive, and accessible corporate website for Spheronix Technology, built with React, TypeScript, and Tailwind CSS.

## Setup & Run

1.  **Clone the repository.**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the full stack development server** (Frontend + Backend):
    ```bash
    npm run dev:full
    ```
    - Frontend: `http://localhost:3000`
    - Backend: `http://localhost:5000`

4.  **Build for production**:
    ```bash
    npm run build
    ```
    This generates the `dist` folder.

5.  **Start Production Server**:
    ```bash
    npm start
    ```
    This runs the Node.js server which serves the API and the static React files from `dist`.
    Access at `http://localhost:5000`.

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api/contact  # For Dev
# VITE_API_URL=/api/contact                     # For Production (Automatic in build)
MONGO_URI=mongodb+srv://...                     # Your MongoDB URI
EMAIL_USER=...                                  # Your Email
EMAIL_PASS=...                                  # Your Email Password
```

## Architecture & Decisions

- **Full Stack**: React Frontend + Node/Express Backend.
- **Production Ready**: Backend serves the frontend static assets in production mode.
- **React SPA**: Uses `react-router-dom` for client-side routing.
- **Tailwind CSS**: Used for all styling.
- **Linting**: ESLint + Prettier configured for code quality.

## Content Management

- **Services**: Defined in `constants.tsx`. Update the `SERVICES` array to add or modify service offerings.
- **Case Studies**: Defined in `constants.tsx`. Add new objects to the `CASE_STUDIES` array to automatically update the Case Studies page.
- **Careers**: Update `JOB_OPENINGS` in `constants.tsx` to refresh the careers board.

## Deployment

Simply connect this repository to **Netlify** or **Vercel**. 
The build command is `npm run build` and the output directory is `dist` (or `build` depending on your bundler config).

---
*Developed by Senior Frontend Engineering Team*
