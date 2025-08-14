// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "./components/shared/Layout";
import { Dashboard } from "./components/shared/Dashboard";
import LoginPage from './components/shared/LoginPage';
import ProtectedRoute from './components/shared/ProtectedRoute';
import { AuthProvider } from './AuthContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route
              path="/"
              element={<ProtectedRoute element={<Layout />} />} // Public layout route
            >
              {/* Define role-based routes here */}
              <Route
                path="Dashboard"
                element={<ProtectedRoute element={<Dashboard />} roles={['admin', 'salesrep','manager']} />}
              />
              
            </Route>

             
            <Route path="*" element={<Navigate to="/Login" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
