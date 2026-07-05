# Chart

**A place for the words you couldn't say. Preserve your hidden affections, regrets, and thoughts.**

Chart is a digital notebook and journaling application designed to help you safely store your personal thoughts, pin important notes, and categorize your feelings with emotion badges.

## Features

- **Authentication:** Secure user login and registration powered by Firebase.
- **Digital Notebook:** Create, read, and manage your personal notes in a beautifully designed interface.
- **Emotion Badges:** Tag your notes with emotions to track how you felt when writing them.
- **Pin Notes:** Keep your most important thoughts at the top of your dashboard.
- **Responsive Design:** A seamless experience across desktop and mobile devices.

## Tech Stack

- **Frontend:** React (v19)
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS (v4)
- **Backend & Auth:** Firebase
- **Build Tool:** Vite

## Getting Started

### Prerequisites

You will need [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tsarles/chart-app.git
   cd chart-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase Environment Variables:**
   Create a `.env` file in the root of the project and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Open `http://localhost:5173` to view it in your browser.

## Deployment

This project is configured for seamless deployment on [Vercel](https://vercel.com/). Make sure to add the Environment Variables in your Vercel project settings before deploying.
