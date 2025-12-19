import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { MdOutlineCategory, MdOutlineCalendarToday, MdOutlineDelete, MdOutlineEdit, MdOutlineVisibility } from "react-icons/md";
import { HashLoader } from "react-spinners"; 
import nofolder from "../../assets/nofolder.svg"; 

const ACCENT_COLOR = "black";
const ACCENT_HEX_COLOR = "#0496ff"; 
const LIGHT_BG = "bg-[#caf0f8]";
const LIGHT_BG_TEXT = "text-gray-900";

const MyTransactions = () => {
    const { user, authLoading } = useContext(AuthContext); 
    const [transactions, setTransactions] = useState([]);
    const [pageLoading, setPageLoading] = useState(true); 
    const navigate = useNavigate();

    const fetchTransactions = async () => {
        if (user?.email) {
            setPageLoading(true);
            try {
                const token = await user.getIdToken();
                const res = await axios.get(
                    `https://a10-server-five.vercel.app/transactions?email=${user.email}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setTransactions(res.data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch transactions");
            } finally {
                setPageLoading(false);
            }
        }
    };

    useEffect(() => {
        if (!authLoading) {
            if (user?.email) {
                fetchTransactions();
            } else {
                setPageLoading(false);
            }
        }
    }, [user, authLoading]);

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This transaction will be deleted permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#00BFA5", 
            cancelButtonColor: "#FF6B6B", 
            confirmButtonText: "Yes, delete it!",
            background: '#FFFFFF', 
            color: '#333333' 
        });

        if (confirm.isConfirmed) {
            try {
                const token = await user.getIdToken();
                const res = await axios.delete(
                    `https://a10-server-five.vercel.app/transactions/${id}?userEmail=${user.email}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (res.data.deletedCount > 0) {
                    fetchTransactions(); 
                    toast.success("Transaction deleted successfully!");
                }
            } catch (error) {
                console.error(error);
                toast.error("Failed to delete transaction");
            }
        }
    };

    const handleView = (id) => {
        navigate(`/transactions/${id}`);
    };

    const handleUpdate = (id) => {
        navigate(`/updatetransaction/${id}`);
    };

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('en-US', { 
            maximumFractionDigits: 0
        }).format(amount);
    };

    if (authLoading || pageLoading) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${LIGHT_BG}`}>
                <HashLoader 
                    color={ACCENT_HEX_COLOR} 
                    size={60} 
                />
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 `}>
             <Toaster position="top-right" />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl ${ACCENT_COLOR} font-extrabold text-center mb-10 tracking-wider`}>
                My Transactions 
            </h2>

            {transactions.length === 0 ? (
                <div className="grid items-center justify-center mt-10">
                    <img className="h-50 w-50" src={nofolder} alt="No transactions" />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {transactions.map((t) => (
                        <div
                            key={t._id}
                            className="relative flex flex-col bg-white border-[1.5px] border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl sm:text-2xl font-bold text-slate-800">$</span>
                                    <span className="text-3xl sm:text-5xl font-extrabold text-slate-800">{formatAmount(t.amount)}</span>
                                    <span className="text-slate-500 font-medium ml-1">/mo</span>
                                </div>
                                <div className="absolute top-4 -right-2">
                                    <div className={`px-3 py-2 sm:px-5 sm:py-4 rounded-l-full font-black text-sm sm:text-xl tracking-widest text-white shadow-lg ${t.type === "Income" ? "bg-gradient-to-r from-blue-400 to-blue-700" : "bg-gradient-to-r from-blue-700 to-blue-200"}`}>
                                        {t.category.toUpperCase()}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 mb-8">
                                <p className="text-slate-800 text-lg font-bold leading-tight mb-6">
                                    Enjoy limitless use with interactive {t.type.toLowerCase()} options
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-rose-400 flex items-center justify-center">
                                            <span className="text-rose-500 text-xs">✓</span>
                                        </div>
                                        <span className="text-slate-600 font-medium">Custom profile and more</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-rose-400 flex items-center justify-center">
                                            <span className="text-rose-500 text-xs">✓</span>
                                        </div>
                                        <span className="text-slate-600 font-medium">{t.userName || "User"} analytics</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-rose-400 flex items-center justify-center">
                                            <span className="text-rose-500 text-xs">✓</span>
                                        </div>
                                        <span className="text-slate-600 font-medium">{new Date(t.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto space-y-3">
                                <button
                                    onClick={() => handleUpdate(t._id)}
                                    className="w-full py-4 rounded-3xl font-bold text-white text-lg transition-transform active:scale-95 shadow-md bg-[#1e88e5] text-white hover:bg-[#1976d2]"
                                >
                                    GET STARTED
                                </button>
                                
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleView(t._id)}
                                        className="flex-1 py-2 text-xs font-bold text-slate-400 hover:text-blue-600 uppercase tracking-tighter transition-colors"
                                    >
                                        View Details
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(t._id)}
                                        className="flex-1 py-2 text-xs font-bold text-slate-400 hover:text-rose-400 uppercase tracking-tighter transition-colors"
                                    >
                                        Remove Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTransactions;