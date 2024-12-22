import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffe from './components/UpdateCoffe.jsx';
import AddCoffe from './components/AddCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffes')
  },
  {
    path:"addCoffe",
    element:<AddCoffe></AddCoffe>
  
  },

  {
    path: "updateCoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: async ({ params }) => {
        const response = await fetch(`http://localhost:5000/coffes/${params.id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch coffee data.");
        }
        return response.json(); // ডেটা রিটার্ন করুন
    }
}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)
