import React from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import PageRoutes from "./components/Pages/PageRoutes";

function App() {
  const location = useLocation();

  // Function to check if the current path is the homepage
  const isHomepageOrLogin = () => {
    return location.pathname === '/homepage' || location.pathname === '/login';
  };

  return (
    <>
        <div className="w-full flex">
        {/* {Navigation Bar} */}
        {!isHomepageOrLogin() && <Navbar /> }

        {/* PAGE ROUTES */}
        <main className="grow">
          <PageRoutes />
        </main>
      </div>
    </>
  );
}

export default App;
