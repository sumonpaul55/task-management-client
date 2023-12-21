import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import AuthContext, { } from './shared/AuthContext'
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContext>
          <RouterProvider router={router}></RouterProvider>
        </AuthContext>
      </QueryClientProvider>
    </HelmetProvider>
    <ToastContainer />
  </React.StrictMode>,
)
