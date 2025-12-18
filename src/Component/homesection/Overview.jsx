import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthContext";
import { HashLoader } from "react-spinners";
const Overview = () => {
   const { user, authLoading } = useContext(AuthContext);
   const [income, setIncome] = useState(0);
   const [expenses, setExpenses] = useState(0);
   const [loading, setLoading] = useState(true);
   const ACCENT_HEX_COLOR = "#0496ff";

   // Fake data for logged out users
   const fakeIncome = 5420.75;
   const fakeExpenses = 3150.30;
   const fakeBalance = fakeIncome - fakeExpenses;

   useEffect(() => {
      const fetchTotals = async () => {
         if (!user?.email) {
            // Show fake data immediately for logged out users
            setLoading(false);
            return;
         }

         setLoading(true);
         try {
            const [incomeRes, expenseRes] = await Promise.all([
               axios.get(`https://a10-server-five.vercel.app/transactions/total-income`, {
                  params: { userEmail: user.email },
                  headers: { Authorization: `Bearer ${user.token}` } // token
               }),
               axios.get(`https://a10-server-five.vercel.app/transactions/total-expense`, {
                  params: { userEmail: user.email },
                  headers: { Authorization: `Bearer ${user.token}` } // token
               })
            ]);

            setIncome(incomeRes.data.total || 0);
            setExpenses(expenseRes.data.total || 0);
         } catch (err) {
            console.error("Error fetching totals:", err);
         } finally {
            setLoading(false);
         }
      };

      if (user?.email) {
         fetchTotals();
      } else {
         // For logged out users, stop loading immediately to show fake data
         setLoading(false);
      }
   }, [user]);

   const balance = income - expenses;

   if (loading || authLoading) {
      return (
         <div className="flex justify-center items-center h-64">
            <HashLoader color={ACCENT_HEX_COLOR} size={60} />
         </div>
      );
   }

   // Show fake data when user is not logged in
   if (!user?.email) {
      return (
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
               <h3 className="text-gray-800 font-medium">Balance</h3>
               <p className="text-2xl font-bold text-black mt-2">${fakeBalance.toFixed(2)}</p>
               <span className="text-xs text-gray-500 mt-1">Demo Data</span>
            </div>

            <div className="bg-blue-100 shadow-lg rounded-2xl p-6 flex flex-col items-center">
               <h3 className="text-green-700 font-medium">Income</h3>
               <p className="text-2xl text-black font-bold mt-2">${fakeIncome.toFixed(2)}</p>
               <span className="text-xs text-gray-500 mt-1">Demo Data</span>
            </div>

            <div className="bg-[#bbdefb] shadow-lg rounded-2xl p-6 flex flex-col items-center">
               <h3 className="text-red-700 font-medium">Expenses</h3>
               <p className="text-2xl font-bold text-black mt-2">${fakeExpenses.toFixed(2)}</p>
               <span className="text-xs text-gray-500 mt-1">Demo Data</span>
            </div>
         </div>
      );
   }

   // Show real data when user is logged in
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
         <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-gray-800 font-medium">Balance</h3>
            <p className="text-2xl font-bold text-black mt-2">${balance.toFixed(2)}</p>
         </div>

         <div className="bg-blue-100 shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-green-700 font-medium">Income</h3>
            <p className="text-2xl text-black font-bold mt-2">${income.toFixed(2)}</p>
         </div>

         <div className="bg-[#bbdefb] shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-red-700 font-medium">Expenses</h3>
            <p className="text-2xl font-bold text-black mt-2">${expenses.toFixed(2)}</p>
         </div>
      </div>
   );
};
export default Overview;