import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './pages/error_page/ErrorPage.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Home from './pages/home/Home.jsx';
import AllArtifacts from './pages/all_artifacts/AllArtifacts.jsx';
import AddArtifact from './pages/add_artifacts/AddArtifact.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import LikedArtifacts from './pages/liked_artifacts/LikedArtifacts.jsx';
import MyArtifacts from './pages/my_artifacts/MyArtifacts.jsx';
import { Toaster } from 'react-hot-toast';
import ArtifactDetails from './pages/artifact_details/ArtifactDetails.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'all-artifacts',
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: 'add-artifacts',
        element: (
          <PrivateRoute>
            <AddArtifact></AddArtifact>
          </PrivateRoute>
        ),
      },
      {
        path: 'artifacts/:id',
        element: (
          <PrivateRoute>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoute>
        ),
      },
      {
        path: 'liked-artifacts',
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-artifacts',
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
