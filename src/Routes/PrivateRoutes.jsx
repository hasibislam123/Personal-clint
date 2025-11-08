import React from "react";
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

  
   if (loading) {
      return (
         <div className="min-h-screen flex justify-center items-center">
            <p className="text-lg font-semibold text-gray-700">Loading...</p>
         </div>
      );
   }

 
   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }


   return children;
};

export default PrivateRoute;