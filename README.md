# Artifact Vault

## Overview
Artifact Vault is a web application designed for tracking and showcasing historical artifacts such as the Rosetta Stone and Antikythera Mechanism. Users can browse artifacts, view detailed information, and contribute by adding their own entries. The platform also allows users to like artifacts and keep track of their contributions. The application features a user-friendly interface for managing and displaying historical artifacts.

## Technologies Used
- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication & JWT-based authentication

## Features
- **Artifact Listings:** Users can browse and explore various historical artifacts.
- **User Contributions:** Users can add their own artifacts, including descriptions and images.
- **Likes & Engagement:** Users can like artifacts to show appreciation.
- **Contribution Tracking:** Users can view and manage their own submitted artifacts.
- **Authentication:** Secure user authentication using Firebase and JWT.
- **Responsive UI:** Optimized for both desktop and mobile users.

## Dependencies

### Core Dependencies
- **React** – JavaScript library for building UI (`react`, `react-dom`)
- **React Router DOM** – Client-side navigation and routing (`react-router-dom`)
- **Axios** – Promise-based HTTP client for API requests (`axios`)
- **Firebase** – Authentication and backend services (`firebase`)

### UI & Styling
- **Tailwind CSS** – Utility-first CSS framework (`tailwindcss`)
- **DaisyUI** – Component library for Tailwind CSS (`daisyui`)
- **PostCSS** – CSS transformations (`postcss`)
- **Autoprefixer** – Adds vendor prefixes to CSS (`autoprefixer`)

### Data Management & Sorting
- **LocalForage** – Client-side storage (`localforage`)
- **Match Sorter** – Intelligent sorting for search results (`match-sorter`)
- **Sort By** – Sorting utility (`sort-by`)

### SEO & Meta Tags
- **React Helmet** – Manage document head for SEO (`react-helmet`)

### Notifications & Alerts
- **React Hot Toast** – Toast notifications (`react-hot-toast`)
- **SweetAlert2** – Stylish popup alerts (`sweetalert2`)

### Swipers & Sliders
- **Swiper** – Sliders and carousels (`swiper`)

## Development Dependencies
- **Vite** – Fast development build tool (`vite`, `@vitejs/plugin-react`)
- **ESLint** – JavaScript and React linting (`eslint`, `@eslint/js`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **TypeScript Type Definitions** – Type support for React (`@types/react`, `@types/react-dom`)
- **Globals** – Provides global variables for ESLint (`globals`)

## Installation Guide

Follow these steps to set up and run the project locally.

### **Prerequisites**
Ensure you have the following installed on your system:
- **Node.js** (Latest LTS recommended) – [Download & Install](https://nodejs.org/)
- **Git** – [Download & Install](https://git-scm.com/)
- **Package Manager**: npm (comes with Node.js) or Yarn

### **Step 1: Clone the Repository**
Open your terminal and run the following command to clone the project:
```sh
git clone https://github.com/Mehedi107/A11-client
```

### **Step 2: Navigate to the Project Directory**
```sh
cd artifact-vault
```

### **Step 3: Install Dependencies**
```sh
npm install
```
or
```sh
yarn install

```

### **Step 4: Set Up Environment Variables**
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_BACKEND_URL=your_backend_url
VITE_JWT_SECRET=your_jwt_secret

```

### **Step 5: Start the Development Server**
```sh
npm run dev

```
or 
```sh
yarn dev

```

### **Step 6: Build for Production (Optional)**
```sh
npm run build

```

### You're all set! 🎉
